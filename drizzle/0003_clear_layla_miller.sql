ALTER TABLE "otp" ALTER COLUMN "expiry" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "otp" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "otp" DROP COLUMN IF EXISTS "updated_at";