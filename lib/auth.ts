import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "@/db/drizzle"
import { users, accounts, sessions, verificationTokens } from "@/db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

// Default admin user credentials
const DEFAULT_ADMIN = {
  email: "admin@ecoleisoko.com",
  password: "EcoleIsoko2025!", // Change this in production
  name: "Administrateur École Isoko"
};

// Hash the default password for secure storage
const getHashedPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

// Verify password against hash
const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Ensure default admin exists in database
async function ensureDefaultAdmin() {
  try {
    const [existingAdmin] = await db
      .select()
      .from(users)
      .where(eq(users.email, DEFAULT_ADMIN.email))
      .limit(1);

    if (!existingAdmin) {
      const hashedPassword = await getHashedPassword(DEFAULT_ADMIN.password);
      
      await db.insert(users).values({
        id: "default-admin",
        email: DEFAULT_ADMIN.email,
        name: DEFAULT_ADMIN.name,
        role: "admin",
        emailVerified: new Date(),
        passwordHash: hashedPassword
      });
      console.log("Default admin user created with secure password hash");
    } else if (!existingAdmin.passwordHash) {
      // Update existing admin with hashed password if it doesn't have one
      const hashedPassword = await getHashedPassword(DEFAULT_ADMIN.password);
      await db
        .update(users)
        .set({ passwordHash: hashedPassword })
        .where(eq(users.id, "default-admin"));
      console.log("Default admin password updated with secure hash");
    }
  } catch (error) {
    console.error("Error ensuring default admin:", error);
    // Don't throw error to avoid breaking auth flow
  }
}