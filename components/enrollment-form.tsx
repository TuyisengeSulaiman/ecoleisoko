"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { enrollmentFormSchema, type EnrollmentFormData } from "@/lib/validations";
import { StudentInfoSection } from "./student-info-section";
import { PreviousSchoolingSection } from "./previous-schooling-section";
import { ParentInfoSection } from "./parent-info-section";
import { SiblingSection } from "./sibling-section";
import { EmergencyContactSection } from "./emergency-contact-section";
import { HealthInfoSection } from "./health-info-section";
import { AuthorizationSection } from "./authorization-section";
import { DocumentUploadSection } from "./document-upload-section";
import { createEnrollmentRegistration } from "@/actions/enrollment";

interface EnrollmentFormProps {
  className?: string;
}

export function EnrollmentForm({ className }: EnrollmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const form = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentFormSchema),
    defaultValues: {
      student: {
        studentName: "",
        studentFirstNames: "",
        studentGender: undefined,
        studentBirthDate: undefined,
        studentBirthPlace: "",
        studentNationality1: "",
        studentNationality2: "",
        studentAddress: "",
        enrollmentGrade: ""
      },
      previousSchooling: [
        {
          academicYear: "2024-2025",
          classLevel: "",
          schoolName: "",
          schoolAddress: ""
        }
      ],
      parents: {
        legalGuardian: undefined,
        motherName: "",
        motherFirstName: "",
        motherMaritalStatus: undefined,
        motherAddress: "",
        motherProfession: "",
        motherPhone: "",
        motherEmail: "",
        fatherName: "",
        fatherFirstName: "",
        fatherMaritalStatus: undefined,
        fatherAddress: "",
        fatherProfession: "",
        fatherPhone: "",
        fatherEmail: ""
      },
      siblings: [],
      emergencyContacts: [
        {
          name: "",
          firstName: "",
          relationship: "",
          profession: "",
          phone: "",
          emergencyContact: false,
          pickupAuthorized: false
        }
      ],
      healthInfo: {
        vaccinationUpToDate: undefined,
        medicationAllergies: "",
        foodAllergies: "",
        otherAllergies: "",
        dietaryRequirements: undefined,
        chronicConditions: "",
        learningDifficulties: "",
        specialistFollowUp: "",
        recentDifficultEvents: "",
        counselorSupport: ""
      },
      authorizations: {
        contactSharingAuthorized: false,
        imageUsageAuthorized: false,
        rulesAccepted: false
      },
      documents: [],
      paymentReference: ""
    }
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true);
    try {
      const result = await createEnrollmentRegistration(data);
      
      if (result.success) {
        toast.success("Inscription soumise avec succès!");
        // Redirect to success page
        window.location.href = `/registration-success?id=${result.registrationId}`;
      } else {
        toast.error(result.error || "Erreur lors de la soumission");
      }
    } catch (error) {
      toast.error("Erreur lors de la soumission");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateCurrentStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);
    return isValid;
  };

  const getFieldsForStep = (step: number): string[] => {
    switch (step) {
      case 1:
        return [
          "student.studentName",
          "student.studentFirstNames", 
          "student.studentGender",
          "student.studentBirthDate",
          "student.studentBirthPlace",
          "student.studentNationality1",
          "student.studentAddress",
          "student.enrollmentGrade"
        ];
      case 2:
        return ["previousSchooling"];
      case 3:
        return ["parents"];
      case 4:
        return ["siblings"];
      case 5:
        return ["emergencyContacts"];
      case 6:
        return ["healthInfo"];
      case 7:
        return ["documents"];
      case 8:
        return ["authorizations"];
      default:
        return [];
    }
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepTitles = [
    "Informations sur l'élève",
    "Scolarité antérieure", 
    "Responsables légaux",
    "Fratrie",
    "Contacts d'urgence",
    "Informations de santé",
    "Documents requis",
    "Autorisations"
  ];

  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Fiche d'inscription 2025-2026
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Ecole Internationale Isoko la source - Formulaire d'inscription
        </p>
        
        {/* Progress indicator */}
        <div className="flex justify-between items-center mb-8">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i + 1 <= currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {i + 1}
              </div>
              {i < totalSteps - 1 && (
                <div
                  className={`h-1 w-12 mx-2 ${
                    i + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-semibold text-center mb-6">
          {stepTitles[currentStep - 1]}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 1 && <StudentInfoSection form={form} />}
          {currentStep === 2 && <PreviousSchoolingSection form={form} />}
          {currentStep === 3 && <ParentInfoSection form={form} />}
          {currentStep === 4 && <SiblingSection form={form} />}
          {currentStep === 5 && <EmergencyContactSection form={form} />}
          {currentStep === 6 && <HealthInfoSection form={form} />}
          {currentStep === 7 && <DocumentUploadSection form={form} />}
          {currentStep === 8 && <AuthorizationSection form={form} />}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Précédent
            </Button>
            
            {currentStep < totalSteps ? (
              <Button type="button" onClick={nextStep}>
                Suivant
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Soumission..." : "Soumettre l'inscription"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}