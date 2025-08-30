# Authentication System - École Isoko

## Overview
NextAuth.js has been successfully implemented with a default admin user for École Isoko's administration panel.

## System Components

### 1. Authentication Configuration (`lib/auth.ts`)
- **NextAuth.js setup** with Drizzle adapter
- **Credentials provider** for email/password authentication
- **Default admin user** with predefined credentials
- **Role-based authentication** with admin role support
- **Database integration** with user persistence

### 2. Database Schema (`db/schema.ts`)
The following tables support NextAuth.js:
- `users` - User accounts with role support
- `accounts` - OAuth account linking
- `sessions` - User sessions
- `verificationTokens` - Email verification

### 3. Admin Login Page (`app/admin/login/page.tsx`)
- **Responsive login form** with validation
- **Error handling** with user feedback
- **Default credentials display** for development
- **Automatic redirection** after successful login

### 4. Protected Admin Layout (`app/admin/layout.tsx`)
- **Session validation** on server side
- **Role-based access control** (admin only)
- **Automatic redirection** for unauthorized users
- **Logout functionality** with session cleanup

### 5. Route Protection (`middleware.ts`)
- **NextAuth middleware** for route protection
- **Admin route protection** with role validation
- **Login page exception** (publicly accessible)
- **Flexible configuration** for additional routes

### 6. Logout Component (`components/logout-button.tsx`)
- **Client-side logout** with NextAuth
- **Proper session cleanup**
- **Redirection to login page**

## Default Admin Credentials

**Email:** admin@ecoleisoko.com  
**Password:** EcoleIsoko2025!

⚠️ **Important:** Change these credentials in production!

## Required Environment Variables

Create a `.env.local` file with:

```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-postgres-database-url
```

## Database Setup

1. Ensure your PostgreSQL database is running
2. Run database migrations:
   ```bash
   npm run db:generate
   ```

## Usage

### Starting the Development Server
```bash
npm run dev
```

### Accessing the Admin Panel
1. Navigate to `http://localhost:3000/admin/login`
2. Use the default credentials above
3. You'll be redirected to `/admin/registrations`

### Adding New Admin Users
New admin users can be added directly to the database with `role = "admin"`.

## Security Features

- **JWT-based sessions** with 24-hour expiry
- **Role-based access control**
- **Server-side session validation**
- **Automatic redirection** for unauthorized access
- **Secure password handling** (ready for bcrypt integration)

## Production Considerations

1. **Change default admin credentials**
2. **Set strong NEXTAUTH_SECRET**
3. **Implement password hashing** with bcrypt
4. **Configure HTTPS** for NEXTAUTH_URL
5. **Set up proper database backups**
6. **Monitor authentication logs**

## Troubleshooting

### Common Issues

1. **"Unauthorized" errors:** Check if user has admin role in database
2. **Session issues:** Verify NEXTAUTH_SECRET is set
3. **Database errors:** Ensure DATABASE_URL is correct
4. **Redirect loops:** Check middleware configuration

### Debug Mode
Set `NEXTAUTH_DEBUG=true` in development for detailed logs.

## API Endpoints

- `GET/POST /api/auth/signin` - Login page
- `POST /api/auth/signout` - Logout
- `GET /api/auth/session` - Current session
- `GET /api/auth/csrf` - CSRF token

## Integration with Enrollment System

The authentication system integrates seamlessly with the existing enrollment form system:
- **Admin dashboard** at `/admin/registrations`
- **Protected routes** for enrollment management
- **Role-based permissions** for data access
- **Session management** across the application