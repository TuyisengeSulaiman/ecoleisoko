import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail } from '@/lib/data';
import { loginSchema } from '@/lib/validations';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);
        
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.passwordHash) return null;

          const passwordsMatch = await bcrypt.compare(password, user.passwordHash);

          if (passwordsMatch) return {
            email: user.email,
            name: user.name || "Admin",
            id: user.id,
            role: "admin",
            image: user.image,
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;