ALTER TABLE "otp" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "otp" ADD COLUMN "updated_at" timestamp NOT NULL;