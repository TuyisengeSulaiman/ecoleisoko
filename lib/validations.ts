import { z } from "zod";

// Login Validation Schema
export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe requis (minimum 6 caractères)")
});

export type LoginData = z.infer<typeof loginSchema>;

// Student Information Validation Schema
export const studentInfoSchema = z.object({
  studentName: z.string().min(2, "Nom requis (minimum 2 caractères)"),
  studentFirstNames: z.string().min(2, "Prénom requis"),
  studentGender: z.enum(["M", "F"], { required_error: "Sexe requis" }),
  studentBirthDate: z.date().refine(date => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 2 && age <= 18;
  }, "L'âge doit être entre 2 et 18 ans"),
  studentBirthPlace: z.string().min(2, "Lieu de naissance requis"),
  studentNationality1: z.string().min(2, "Nationalité requise"),
  studentNationality2: z.string().optional(),
  studentAddress: z.string().min(10, "Adresse complète requise"),
  enrollmentGrade: z.string().min(1, "Niveau d'inscription requis")
});

// Previous Schooling Validation Schema
export const previousSchoolingSchema = z.object({
  academicYear: z.string().min(9, "Année scolaire requise (ex: 2024-2025)"),
  classLevel: z.string().min(1, "Classe requise"),
  schoolName: z.string().min(2, "Nom de l'école requis"),
  schoolAddress: z.string().min(5, "Adresse de l'école requise")
});

// Parent Information Validation Schema
export const parentInfoSchema = z.object({
  legalGuardian: z.enum(["pere_et_mere", "pere", "mere", "autre"], {
    required_error: "Responsable légal requis"
  }),
  
  // Mother Information
  motherName: z.string().optional(),
  motherFirstName: z.string().optional(),
  motherMaritalStatus: z.enum(["celibataire", "mariee", "veuve", "divorcee", "separee"]).optional(),
  motherAddress: z.string().optional(),
  motherProfession: z.string().optional(),
  motherPhone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Format de téléphone invalide").optional(),
  motherEmail: z.string().email("Email invalide").optional(),
  
  // Father Information
  fatherName: z.string().optional(),
  fatherFirstName: z.string().optional(),
  fatherMaritalStatus: z.enum(["celibataire", "marie", "veuf", "divorce", "separe"]).optional(),
  fatherAddress: z.string().optional(),
  fatherProfession: z.string().optional(),
  fatherPhone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Format de téléphone invalide").optional(),
  fatherEmail: z.string().email("Email invalide").optional()
}).refine(data => {
  // At least one parent email is required
  return data.motherEmail || data.fatherEmail;
}, {
  message: "Au moins un email parent requis",
  path: ["motherEmail"]
});

// Sibling Information Validation Schema
export const siblingSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  firstName: z.string().min(2, "Prénom requis"),
  birthDate: z.date().optional(),
  currentClass: z.string().optional(),
  currentSchool: z.string().optional()
});

// Emergency Contact Validation Schema
export const emergencyContactSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  firstName: z.string().min(2, "Prénom requis"),
  relationship: z.string().min(2, "Lien avec l'élève requis"),
  profession: z.string().optional(),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Format de téléphone invalide"),
  emergencyContact: z.boolean().default(false),
  pickupAuthorized: z.boolean().default(false)
});

// Health Information Validation Schema
export const healthInfoSchema = z.object({
  vaccinationUpToDate: z.boolean(),
  medicationAllergies: z.string().optional(),
  foodAllergies: z.string().optional(),
  otherAllergies: z.string().optional(),
  dietaryRequirements: z.enum(["normal", "sans_viande", "halal", "kasher", "autre"]).optional(),
  chronicConditions: z.string().optional(),
  learningDifficulties: z.string().optional(),
  specialistFollowUp: z.string().optional(),
  recentDifficultEvents: z.string().optional(),
  counselorSupport: z.string().optional()
});

// Authorizations Validation Schema
export const authorizationsSchema = z.object({
  contactSharingAuthorized: z.boolean(),
  imageUsageAuthorized: z.boolean(),
  rulesAccepted: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter le règlement de l'école"
  })
});

// Document Upload Validation Schema
export const documentSchema = z.object({
  documentType: z.enum(["photo", "identity_card", "school_records", "visa", "other"]),
  fileName: z.string(),
  fileUrl: z.string().url(),
  fileSize: z.number().max(10 * 1024 * 1024, "Fichier trop volumineux (max 10MB)")
});

// Complete Enrollment Form Validation Schema
export const enrollmentFormSchema = z.object({
  student: studentInfoSchema,
  previousSchooling: z.array(previousSchoolingSchema).min(1, "Au moins une année de scolarité précédente requise"),
  parents: parentInfoSchema,
  siblings: z.array(siblingSchema).optional(),
  emergencyContacts: z.array(emergencyContactSchema).min(1, "Au moins un contact d'urgence requis"),
  healthInfo: healthInfoSchema,
  authorizations: authorizationsSchema,
  documents: z.array(documentSchema).optional(),
  paymentReference: z.string().optional()
});

export type EnrollmentFormData = z.infer<typeof enrollmentFormSchema>;
export type StudentInfo = z.infer<typeof studentInfoSchema>;
export type PreviousSchooling = z.infer<typeof previousSchoolingSchema>;
export type ParentInfo = z.infer<typeof parentInfoSchema>;
export type SiblingInfo = z.infer<typeof siblingSchema>;
export type EmergencyContactInfo = z.infer<typeof emergencyContactSchema>;
export type HealthInfo = z.infer<typeof healthInfoSchema>;
export type AuthorizationInfo = z.infer<typeof authorizationsSchema>;
export type DocumentInfo = z.infer<typeof documentSchema>;

// Grade options for École Isoko
export const gradeOptions = [
  { value: "pre_maternelle", label: "Prématernelle - PPS" },
  { value: "m1_ps", label: "M 1 – PS (3 ans)" },
  { value: "m2_ms", label: "M 2 – MS" },
  { value: "m3_gs", label: "M 3 - GS" },
  { value: "p1_cp", label: "P 1 (6 ans) - CP" },
  { value: "p2_ce1", label: "P 2 - CE 1" },
  { value: "p3_ce2", label: "P 3 - CE 2" },
  { value: "p4_cm1", label: "P 4 - CM 1" },
  { value: "p5_cm2", label: "P 5 - CM 2" },
  { value: "p6_6eme", label: "P 6 - 6ème collège" },
  { value: "s1_5eme", label: "S 1 - 5ème collège" },
  { value: "s2_4eme", label: "S 2 - 4ème collège" },
  { value: "s3_3eme", label: "S 3 - 3ème collège" }
];

// Marital status options
export const maritalStatusOptions = {
  mother: [
    { value: "celibataire", label: "Célibataire" },
    { value: "mariee", label: "Mariée" },
    { value: "veuve", label: "Veuve" },
    { value: "divorcee", label: "Divorcée" },
    { value: "separee", label: "Séparée" }
  ],
  father: [
    { value: "celibataire", label: "Célibataire" },
    { value: "marie", label: "Marié" },
    { value: "veuf", label: "Veuf" },
    { value: "divorce", label: "Divorcé" },
    { value: "separe", label: "Séparé" }
  ]
};

// Legal guardian options
export const legalGuardianOptions = [
  { value: "pere_et_mere", label: "Père et mère" },
  { value: "pere", label: "Père" },
  { value: "mere", label: "Mère" },
  { value: "autre", label: "Autre (précisez)" }
];

// Dietary requirements options
export const dietaryOptions = [
  { value: "normal", label: "Normal" },
  { value: "sans_viande", label: "Régime sans viande" },
  { value: "halal", label: "Halal" },
  { value: "kasher", label: "Kasher" },
  { value: "autre", label: "Autre" }
];