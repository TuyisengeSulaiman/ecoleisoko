import { handlers } from "@/auth";

// Specify Node.js runtime for auth routes
export const runtime = 'nodejs';

export const { GET, POST } = handlers;