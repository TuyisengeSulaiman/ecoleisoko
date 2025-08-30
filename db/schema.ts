import { integer, pgTable, serial, text, numeric, varchar, timestamp, date, boolean, primaryKey } from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";

export var otpTable = pgTable("otp", {
  id: serial("id").primaryKey(),
  otp: text("otp").notNull(),
  expiry: text("expiry").notNull(),
  ip: text("ip").notNull()
});

// Admin Sessions Table
export const adminSessions = pgTable("admin_sessions", {
  id: serial("id").primaryKey(),
  sessionToken: varchar("session_token", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  lastAccessedAt: timestamp("last_accessed_at").defaultNow()
});

// NextAuth.js Tables
export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: varchar("role", { length: 20 }).default("user"), // user, admin
  passwordHash: text("password_hash"), // For storing hashed passwords
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export type InsertOtp = typeof otpTable.$inferInsert;
export type InsertAdminSession = typeof adminSessions.$inferInsert;
export type SelectAdminSession = typeof adminSessions.$inferSelect;

// Enrollment Registration Tables
export const enrollmentRegistrations = pgTable("enrollment_registrations", {
  id: serial("id").primaryKey(),
  submissionDate: timestamp("submission_date").defaultNow(),
  academicYear: varchar("academic_year", { length: 20 }).notNull().default("2025-2026"),
  status: varchar("status", { length: 20 }).default("pending"),
  
  // Student Information
  studentName: varchar("student_name", { length: 255 }).notNull(),
  studentFirstNames: text("student_first_names"),
  studentGender: varchar("student_gender", { length: 1 }),
  studentBirthDate: date("student_birth_date").notNull(),
  studentBirthPlace: varchar("student_birth_place", { length: 255 }),
  studentNationality1: varchar("student_nationality_1", { length: 100 }),
  studentNationality2: varchar("student_nationality_2", { length: 100 }),
  studentAddress: text("student_address"),
  enrollmentGrade: varchar("enrollment_grade", { length: 50 }).notNull(),
  
  // Parent/Guardian Information
  legalGuardian: varchar("legal_guardian", { length: 50 }),
  motherName: varchar("mother_name", { length: 255 }),
  motherFirstName: varchar("mother_first_name", { length: 255 }),
  motherMaritalStatus: varchar("mother_marital_status", { length: 20 }),
  motherAddress: text("mother_address"),
  motherProfession: varchar("mother_profession", { length: 255 }),
  motherPhone: varchar("mother_phone", { length: 20 }),
  motherEmail: varchar("mother_email", { length: 255 }),
  
  fatherName: varchar("father_name", { length: 255 }),
  fatherFirstName: varchar("father_first_name", { length: 255 }),
  fatherMaritalStatus: varchar("father_marital_status", { length: 20 }),
  fatherAddress: text("father_address"),
  fatherProfession: varchar("father_profession", { length: 255 }),
  fatherPhone: varchar("father_phone", { length: 20 }),
  fatherEmail: varchar("father_email", { length: 255 }),
  
  // Health Information
  vaccinationUpToDate: boolean("vaccination_up_to_date"),
  medicationAllergies: text("medication_allergies"),
  foodAllergies: text("food_allergies"),
  otherAllergies: text("other_allergies"),
  dietaryRequirements: varchar("dietary_requirements", { length: 100 }),
  chronicConditions: text("chronic_conditions"),
  learningDifficulties: text("learning_difficulties"),
  specialistFollowUp: text("specialist_follow_up"),
  recentDifficultEvents: text("recent_difficult_events"),
  counselorSupport: text("counselor_support"),
  
  // Authorizations
  contactSharingAuthorized: boolean("contact_sharing_authorized").default(false),
  imageUsageAuthorized: boolean("image_usage_authorized").default(false),
  rulesAccepted: boolean("rules_accepted").default(false),
  
  // Payment Information
  inscriptionFeesPaid: boolean("inscription_fees_paid").default(false),
  paymentReference: varchar("payment_reference", { length: 255 }),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export const previousSchooling = pgTable("previous_schooling", {
  id: serial("id").primaryKey(),
  registrationId: integer("registration_id").references(() => enrollmentRegistrations.id),
  academicYear: varchar("academic_year", { length: 20 }),
  classLevel: varchar("class_level", { length: 50 }),
  schoolName: varchar("school_name", { length: 255 }),
  schoolAddress: text("school_address")
});

export const siblings = pgTable("siblings", {
  id: serial("id").primaryKey(),
  registrationId: integer("registration_id").references(() => enrollmentRegistrations.id),
  name: varchar("name", { length: 255 }),
  firstName: varchar("first_name", { length: 255 }),
  birthDate: date("birth_date"),
  currentClass: varchar("current_class", { length: 100 }),
  currentSchool: varchar("current_school", { length: 255 })
});

export const emergencyContacts = pgTable("emergency_contacts", {
  id: serial("id").primaryKey(),
  registrationId: integer("registration_id").references(() => enrollmentRegistrations.id),
  name: varchar("name", { length: 255 }),
  firstName: varchar("first_name", { length: 255 }),
  relationship: varchar("relationship", { length: 100 }),
  profession: varchar("profession", { length: 255 }),
  phone: varchar("phone", { length: 20 }),
  emergencyContact: boolean("emergency_contact").default(false),
  pickupAuthorized: boolean("pickup_authorized").default(false)
});

export const registrationDocuments = pgTable("registration_documents", {
  id: serial("id").primaryKey(),
  registrationId: integer("registration_id").references(() => enrollmentRegistrations.id),
  documentType: varchar("document_type", { length: 50 }),
  fileName: varchar("file_name", { length: 255 }),
  fileUrl: text("file_url"),
  fileSize: integer("file_size"),
  uploadDate: timestamp("upload_date").defaultNow()
});

// Export types for TypeScript inference
export type InsertEnrollmentRegistration = typeof enrollmentRegistrations.$inferInsert;
export type SelectEnrollmentRegistration = typeof enrollmentRegistrations.$inferSelect;
export type InsertPreviousSchooling = typeof previousSchooling.$inferInsert;
export type SelectPreviousSchooling = typeof previousSchooling.$inferSelect;
export type InsertSibling = typeof siblings.$inferInsert;
export type SelectSibling = typeof siblings.$inferSelect;
export type InsertEmergencyContact = typeof emergencyContacts.$inferInsert;
export type SelectEmergencyContact = typeof emergencyContacts.$inferSelect;
export type InsertRegistrationDocument = typeof registrationDocuments.$inferInsert;
export type SelectRegistrationDocument = typeof registrationDocuments.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;