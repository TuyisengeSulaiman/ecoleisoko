import { config } from 'dotenv';

config({ path: '.env.local' });
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from 'bcryptjs';

const DEFAULT_ADMIN = {
  id: "default-admin",
  email: "admin@ecoleisoko.com",
  name: "Administrateur École Isoko",
  password: "EcoleIsoko2025!",
  role: "admin" as const
};

export async function initializeDefaultAdmin() {
  try {
    console.log("Checking for default admin user...");
    
    const [existingAdmin] = await db
      .select()
      .from(users)
      .where(eq(users.email, DEFAULT_ADMIN.email))
      .limit(1);

    if (existingAdmin) {
      console.log("Default admin user already exists:", existingAdmin.email);
      return existingAdmin;
    }

    console.log("Creating default admin user...");
    const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, 10);
    const [newAdmin] = await db
      .insert(users)
      .values({
        ...DEFAULT_ADMIN,
        passwordHash: hashedPassword,
        emailVerified: new Date()
      })
      .returning();

    console.log("✅ Default admin user created successfully:");
    console.log("📧 Email:", DEFAULT_ADMIN.email);
    console.log("🔑 Password: EcoleIsoko2025!");
    console.log("⚠️  Please change the default password in production!");
    
    return newAdmin;
  } catch (error) {
    console.error("❌ Error initializing default admin:", error);
    throw error;
  }
}

// Run this script directly
if (require.main === module) {
  initializeDefaultAdmin()
    .then(() => {
      console.log("✅ Default admin initialization completed");
      process.exit(0);
    })
    .catch((error) => {
      console.error("❌ Failed to initialize default admin:", error);
      process.exit(1);
    });
}