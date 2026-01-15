import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [],
  pages: {
    signIn: '/admin/login',
  },
} satisfies NextAuthConfig;