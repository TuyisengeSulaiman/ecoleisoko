CREATE TABLE IF NOT EXISTS "emergency_contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"registration_id" integer,
	"name" varchar(255),
	"first_name" varchar(255),
	"relationship" varchar(100),
	"profession" varchar(255),
	"phone" varchar(20),
	"emergency_contact" boolean DEFAULT false,
	"pickup_authorized" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enrollment_registrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"submission_date" timestamp DEFAULT now(),
	"academic_year" varchar(20) DEFAULT '2025-2026' NOT NULL,
	"status" varchar(20) DEFAULT 'pending',
	"student_name" varchar(255) NOT NULL,
	"student_first_names" text,
	"student_gender" varchar(1),
	"student_birth_date" date NOT NULL,
	"student_birth_place" varchar(255),
	"student_nationality_1" varchar(100),
	"student_nationality_2" varchar(100),
	"student_address" text,
	"enrollment_grade" varchar(50) NOT NULL,
	"legal_guardian" varchar(50),
	"mother_name" varchar(255),
	"mother_first_name" varchar(255),
	"mother_marital_status" varchar(20),
	"mother_address" text,
	"mother_profession" varchar(255),
	"mother_phone" varchar(20),
	"mother_email" varchar(255),
	"father_name" varchar(255),
	"father_first_name" varchar(255),
	"father_marital_status" varchar(20),
	"father_address" text,
	"father_profession" varchar(255),
	"father_phone" varchar(20),
	"father_email" varchar(255),
	"vaccination_up_to_date" boolean,
	"medication_allergies" text,
	"food_allergies" text,
	"other_allergies" text,
	"dietary_requirements" varchar(100),
	"chronic_conditions" text,
	"learning_difficulties" text,
	"specialist_follow_up" text,
	"recent_difficult_events" text,
	"counselor_support" text,
	"contact_sharing_authorized" boolean DEFAULT false,
	"image_usage_authorized" boolean DEFAULT false,
	"rules_accepted" boolean DEFAULT false,
	"inscription_fees_paid" boolean DEFAULT false,
	"payment_reference" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "previous_schooling" (
	"id" serial PRIMARY KEY NOT NULL,
	"registration_id" integer,
	"academic_year" varchar(20),
	"class_level" varchar(50),
	"school_name" varchar(255),
	"school_address" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "registration_documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"registration_id" integer,
	"document_type" varchar(50),
	"file_name" varchar(255),
	"file_url" text,
	"file_size" integer,
	"upload_date" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "siblings" (
	"id" serial PRIMARY KEY NOT NULL,
	"registration_id" integer,
	"name" varchar(255),
	"first_name" varchar(255),
	"birth_date" date,
	"current_class" varchar(100),
	"current_school" varchar(255)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "emergency_contacts" ADD CONSTRAINT "emergency_contacts_registration_id_enrollment_registrations_id_fk" FOREIGN KEY ("registration_id") REFERENCES "public"."enrollment_registrations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "previous_schooling" ADD CONSTRAINT "previous_schooling_registration_id_enrollment_registrations_id_fk" FOREIGN KEY ("registration_id") REFERENCES "public"."enrollment_registrations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "registration_documents" ADD CONSTRAINT "registration_documents_registration_id_enrollment_registrations_id_fk" FOREIGN KEY ("registration_id") REFERENCES "public"."enrollment_registrations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "siblings" ADD CONSTRAINT "siblings_registration_id_enrollment_registrations_id_fk" FOREIGN KEY ("registration_id") REFERENCES "public"."enrollment_registrations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
