CREATE TABLE IF NOT EXISTS "otp" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" integer NOT NULL,
	"expiry" timestamp NOT NULL
);
