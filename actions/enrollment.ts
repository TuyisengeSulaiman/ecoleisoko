"use server";

import { db } from "@/db/drizzle";
import { 
  enrollmentRegistrations, 
  previousSchooling, 
  siblings, 
  emergencyContacts,
  registrationDocuments,
  type InsertEnrollmentRegistration,
  type InsertPreviousSchooling,
  type InsertSibling,
  type InsertEmergencyContact,
  type InsertRegistrationDocument
} from "@/db/schema";
import { EnrollmentFormData } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import { sendEnrollmentConfirmationEmail, sendAdminNotificationEmail } from "@/lib/mail";

export async function createEnrollmentRegistration(formData: EnrollmentFormData) {
  try {
    // Prepare main registration data
    const registrationData: InsertEnrollmentRegistration = {
      academicYear: "2025-2026",
      status: "pending",
      
      // Student Information
      studentName: formData.student.studentName,
      studentFirstNames: formData.student.studentFirstNames,
      studentGender: formData.student.studentGender,
      studentBirthDate: formData.student.studentBirthDate.toISOString().split('T')[0],
      studentBirthPlace: formData.student.studentBirthPlace,
      studentNationality1: formData.student.studentNationality1,
      studentNationality2: formData.student.studentNationality2,
      studentAddress: formData.student.studentAddress,
      enrollmentGrade: formData.student.enrollmentGrade,
      
      // Parent Information
      legalGuardian: formData.parents.legalGuardian,
      motherName: formData.parents.motherName,
      motherFirstName: formData.parents.motherFirstName,
      motherMaritalStatus: formData.parents.motherMaritalStatus,
      motherAddress: formData.parents.motherAddress,
      motherProfession: formData.parents.motherProfession,
      motherPhone: formData.parents.motherPhone,
      motherEmail: formData.parents.motherEmail,
      
      fatherName: formData.parents.fatherName,
      fatherFirstName: formData.parents.fatherFirstName,
      fatherMaritalStatus: formData.parents.fatherMaritalStatus,
      fatherAddress: formData.parents.fatherAddress,
      fatherProfession: formData.parents.fatherProfession,
      fatherPhone: formData.parents.fatherPhone,
      fatherEmail: formData.parents.fatherEmail,
      
      // Health Information
      vaccinationUpToDate: formData.healthInfo.vaccinationUpToDate,
      medicationAllergies: formData.healthInfo.medicationAllergies,
      foodAllergies: formData.healthInfo.foodAllergies,
      otherAllergies: formData.healthInfo.otherAllergies,
      dietaryRequirements: formData.healthInfo.dietaryRequirements,
      chronicConditions: formData.healthInfo.chronicConditions,
      learningDifficulties: formData.healthInfo.learningDifficulties,
      specialistFollowUp: formData.healthInfo.specialistFollowUp,
      recentDifficultEvents: formData.healthInfo.recentDifficultEvents,
      counselorSupport: formData.healthInfo.counselorSupport,
      
      // Authorizations
      contactSharingAuthorized: formData.authorizations.contactSharingAuthorized,
      imageUsageAuthorized: formData.authorizations.imageUsageAuthorized,
      rulesAccepted: formData.authorizations.rulesAccepted,
      
      // Payment
      inscriptionFeesPaid: false,
      paymentReference: formData.paymentReference
    };

    // Insert main registration
    const [registration] = await db
      .insert(enrollmentRegistrations)
      .values(registrationData)
      .returning({ id: enrollmentRegistrations.id });

    const registrationId = registration.id;

    // Insert previous schooling records
    if (formData.previousSchooling && formData.previousSchooling.length > 0) {
      const schoolingData: InsertPreviousSchooling[] = formData.previousSchooling.map(school => ({
        registrationId,
        academicYear: school.academicYear,
        classLevel: school.classLevel,
        schoolName: school.schoolName,
        schoolAddress: school.schoolAddress
      }));
      
      await db.insert(previousSchooling).values(schoolingData);
    }

    // Insert siblings
    if (formData.siblings && formData.siblings.length > 0) {
      const siblingsData: InsertSibling[] = formData.siblings.map(sibling => ({
        registrationId,
        name: sibling.name,
        firstName: sibling.firstName,
        birthDate: sibling.birthDate ? sibling.birthDate.toISOString().split('T')[0] : '',
        currentClass: sibling.currentClass,
        currentSchool: sibling.currentSchool
      }));
      
      await db.insert(siblings).values(siblingsData);
    }

    // Insert emergency contacts
    if (formData.emergencyContacts && formData.emergencyContacts.length > 0) {
      const contactsData: InsertEmergencyContact[] = formData.emergencyContacts.map(contact => ({
        registrationId,
        name: contact.name,
        firstName: contact.firstName,
        relationship: contact.relationship,
        profession: contact.profession,
        phone: contact.phone,
        emergencyContact: contact.emergencyContact,
        pickupAuthorized: contact.pickupAuthorized
      }));
      
      await db.insert(emergencyContacts).values(contactsData);
    }

    // Insert documents
    if (formData.documents && formData.documents.length > 0) {
      const documentsData: InsertRegistrationDocument[] = formData.documents.map(document => ({
        registrationId,
        documentType: document.documentType,
        fileName: document.fileName,
        fileUrl: document.fileUrl,
        fileSize: document.fileSize
      }));
      
      await db.insert(registrationDocuments).values(documentsData);
    }

    // Send confirmation email (to be implemented)
    try {
      await Promise.all([
        sendEnrollmentConfirmationEmail(registrationId.toString(), formData),
        sendAdminNotificationEmail(registrationId.toString(), formData)
      ]);
      console.log('Enrollment emails sent successfully');
    } catch (emailError) {
      console.error('Failed to send enrollment emails:', emailError);
      // Don't fail the registration if email sending fails
    }

    revalidatePath('/admin/registrations');
    
    return {
      success: true,
      registrationId: registrationId.toString(),
      message: "Inscription soumise avec succès"
    };

  } catch (error) {
    console.error("Error creating enrollment registration:", error);
    return {
      success: false,
      error: "Erreur lors de la soumission de l'inscription. Veuillez réessayer."
    };
  }
}

export async function getEnrollmentRegistrationById(id: string) {
  try {
    const registrationId = parseInt(id);
    
    const [registration] = await db
      .select()
      .from(enrollmentRegistrations)
      .where(eq(enrollmentRegistrations.id, registrationId));

    if (!registration) {
      return {
        success: false,
        error: "Inscription non trouvée"
      };
    }

    // Get related data
    const [schoolingRecords, siblingRecords, contactRecords, documentRecords] = await Promise.all([
      db.select().from(previousSchooling).where(eq(previousSchooling.registrationId, registrationId)),
      db.select().from(siblings).where(eq(siblings.registrationId, registrationId)),
      db.select().from(emergencyContacts).where(eq(emergencyContacts.registrationId, registrationId)),
      db.select().from(registrationDocuments).where(eq(registrationDocuments.registrationId, registrationId))
    ]);

    return {
      success: true,
      data: {
        registration,
        previousSchooling: schoolingRecords,
        siblings: siblingRecords,
        emergencyContacts: contactRecords,
        documents: documentRecords
      }
    };

  } catch (error) {
    console.error("Error fetching registration:", error);
    return {
      success: false,
      error: "Erreur lors de la récupération de l'inscription"
    };
  }
}

export async function getAllEnrollmentRegistrations() {
  try {
    const registrations = await db
      .select({
        id: enrollmentRegistrations.id,
        submissionDate: enrollmentRegistrations.submissionDate,
        academicYear: enrollmentRegistrations.academicYear,
        status: enrollmentRegistrations.status,
        studentName: enrollmentRegistrations.studentName,
        studentFirstNames: enrollmentRegistrations.studentFirstNames,
        enrollmentGrade: enrollmentRegistrations.enrollmentGrade,
        motherEmail: enrollmentRegistrations.motherEmail,
        fatherEmail: enrollmentRegistrations.fatherEmail,
        inscriptionFeesPaid: enrollmentRegistrations.inscriptionFeesPaid,
        paymentReference: enrollmentRegistrations.paymentReference
      })
      .from(enrollmentRegistrations)
      .orderBy(desc(enrollmentRegistrations.submissionDate));

    return {
      success: true,
      data: registrations
    };

  } catch (error) {
    console.error("Error fetching registrations:", error);
    return {
      success: false,
      error: "Erreur lors de la récupération des inscriptions"
    };
  }
}

export async function updateRegistrationStatus(id: string, status: string) {
  try {
    const registrationId = parseInt(id);
    
    await db
      .update(enrollmentRegistrations)
      .set({ 
        status,
        updatedAt: new Date()
      })
      .where(eq(enrollmentRegistrations.id, registrationId));

    revalidatePath('/admin/registrations');
    revalidatePath(`/admin/registrations/${id}`);

    return {
      success: true,
      message: "Statut mis à jour avec succès"
    };

  } catch (error) {
    console.error("Error updating registration status:", error);
    return {
      success: false,
      error: "Erreur lors de la mise à jour du statut"
    };
  }
}

export async function markPaymentReceived(id: string, paymentReference?: string) {
  try {
    const registrationId = parseInt(id);
    
    await db
      .update(enrollmentRegistrations)
      .set({ 
        inscriptionFeesPaid: true,
        paymentReference: paymentReference || null,
        updatedAt: new Date()
      })
      .where(eq(enrollmentRegistrations.id, registrationId));

    revalidatePath('/admin/registrations');
    revalidatePath(`/admin/registrations/${id}`);

    return {
      success: true,
      message: "Paiement confirmé avec succès"
    };

  } catch (error) {
    console.error("Error marking payment received:", error);
    return {
      success: false,
      error: "Erreur lors de la confirmation du paiement"
    };
  }
}