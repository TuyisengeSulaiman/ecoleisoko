import { integer, pgTable, serial, text, numeric } from "drizzle-orm/pg-core";

export var otpTable = pgTable("otp", {
  id: serial("id").primaryKey(),
  otp: text("otp").notNull(),
  expiry: text("expiry").notNull(),
  ip: text("ip").notNull()
});

export type InsertOtp = typeof otpTable.$inferInsert;