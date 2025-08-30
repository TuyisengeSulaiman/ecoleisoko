"use server"
import { Resend } from "resend";
import EnrollmentConfirmationEmail from '@/components/emails/enrollment-confirmation';
import { EnrollmentFormData } from './validations';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendIdea = async (email: string, name: string, idea: string) => {
  await resend.emails.send({
    from: "Isooko Web <idea@ecoleisooko.com>",
    to: ["dynamiccode00@gmail.com","isokolasource@gmail.com"],
    subject: "Idée",
    html: `
      <h1>Idée de ${name}</h1>
      <p style="color: #1D4ED8" >Email: &lt;${email}&gt;</p>
      <hr />
      <h2>${idea}</h2>
      `,
  });
};

export const sendOtp = async (email: string, subject: string, otp: string) => {
  await resend.emails.send({
    from: "Isooko autoriser <autoriser@ecoleisooko.com>",
    to: ["isokolasource@gmail.com","dynamiccode00@gmail.com"],
    subject: `${subject}`,
    html: `
      <h1>Code d'accès</h1>
      <p>Subject: ${subject} </p>
      <h2>fournit cet OTP <b>${otp}</b></h2>
      `,
  });
}

export async function sendEnrollmentConfirmationEmail(
  registrationId: string,
  formData: EnrollmentFormData
) {
  try {
    // Determine which parent email to use
    const parentEmail = formData.parents.motherEmail || formData.parents.fatherEmail;
    
    if (!parentEmail) {
      throw new Error('No parent email found');
    }

    const studentFullName = `${formData.student.studentName} ${formData.student.studentFirstNames}`;
    const submissionDate = new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const { data, error } = await resend.emails.send({
      from: 'École Isoko <noreply@ecoleisooko.com>',
      to: [parentEmail],
      cc: ['isokolasource@gmail.com'], // Copy school administration
      subject: `Confirmation d'inscription - ${studentFullName} - École Isoko`,
      react: EnrollmentConfirmationEmail({
        studentName: studentFullName,
        registrationId,
        parentEmail,
        enrollmentGrade: formData.student.enrollmentGrade,
        submissionDate
      })
    });

    if (error) {
      console.error('Error sending enrollment confirmation email:', error);
      return { success: false, error: error.message };
    }

    console.log('Enrollment confirmation email sent successfully:', data?.id);
    return { success: true, data };
  } catch (error) {
    console.error('Enrollment confirmation email failed:', error);
    return { success: false, error: 'Failed to send confirmation email' };
  }
}

export async function sendAdminNotificationEmail(
  registrationId: string,
  formData: EnrollmentFormData
) {
  try {
    const studentFullName = `${formData.student.studentName} ${formData.student.studentFirstNames}`;
    const parentEmail = formData.parents.motherEmail || formData.parents.fatherEmail;
    const submissionDate = new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const { data, error } = await resend.emails.send({
      from: 'École Isoko <noreply@ecoleisooko.com>',
      to: ['isokolasource@gmail.com'],
      subject: `Nouvelle inscription reçue - ${studentFullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle inscription reçue</h2>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informations sur l'élève :</h3>
            <p><strong>Nom complet :</strong> ${studentFullName}</p>
            <p><strong>Niveau d'inscription :</strong> ${formData.student.enrollmentGrade}</p>
            <p><strong>Date de naissance :</strong> ${formData.student.studentBirthDate}</p>
            <p><strong>Lieu de naissance :</strong> ${formData.student.studentBirthPlace}</p>
            <p><strong>Nationalité :</strong> ${formData.student.studentNationality1}${formData.student.studentNationality2 ? `, ${formData.student.studentNationality2}` : ''}</p>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact des parents :</h3>
            <p><strong>Email de contact :</strong> ${parentEmail}</p>
            ${formData.parents.motherPhone ? `<p><strong>Téléphone mère :</strong> ${formData.parents.motherPhone}</p>` : ''}
            ${formData.parents.fatherPhone ? `<p><strong>Téléphone père :</strong> ${formData.parents.fatherPhone}</p>` : ''}
          </div>
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Détails de la soumission :</h3>
            <p><strong>Numéro de dossier :</strong> #{registrationId}</p>
            <p><strong>Date de soumission :</strong> ${submissionDate}</p>
            <p><strong>Année académique :</strong> 2025-2026</p>
          </div>
          
          <p style="margin-top: 30px;">
            <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3001'}/admin/registrations/${registrationId}" 
               style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Voir le dossier complet
            </a>
          </p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Cette notification a été envoyée automatiquement depuis le système d'inscription de l'École Isoko.
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Error sending admin notification email:', error);
      return { success: false, error: error.message };
    }

    console.log('Admin notification email sent successfully:', data?.id);
    return { success: true, data };
  } catch (error) {
    console.error('Admin notification email failed:', error);
    return { success: false, error: 'Failed to send admin notification' };
  }
}