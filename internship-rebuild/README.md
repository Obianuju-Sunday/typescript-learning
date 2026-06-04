# Internship & Skill Profiling System (TypeScript Rebuild)

Phase 1 of rebuilding my backend with professional standards - COMPLETE.

## Features

✅ Student & Organization Registration with JWT Auth
✅ Password hashing with bcryptjs
✅ Login with 24-hour JWT tokens
✅ Auth middleware & protected routes
✅ Internship CRUD (Create, Read, Update, Delete)
✅ Internship ID management (auto-increment, renumbering on delete)
✅ Application System:
  - Students can apply to internships
  - Organizations view applications for their internships
  - Accept/reject applications with status tracking
✅ Data linking (Students → Profiles → Applications → Internships → Organizations)
✅ Role-based access control (student vs organisation)
✅ Optional fields (stipend, requirements, otherInfo)

## Tech Stack
- **Runtime:** Bun
- **Framework:** Express.js
- **Language:** TypeScript
- **Auth:** JWT + Bcryptjs
- **Data:** Mock arrays (Phase 1)

## Routes

### Auth
- POST `/auth/register/student` - Register student
- POST `/auth/register/organisation` - Register org
- POST `/auth/login` - Login (returns JWT token)
- GET `/auth/test` - Protected route (test)
- GET `/auth/users` - Get all users

### Internships
- GET `/internships` - List all active internships (with org names)
- GET `/internships/:id` - Get single internship
- POST `/internships` - Create (org only, protected)
- PUT `/internships/:id` - Update (org only, protected)
- DELETE `/internships/:id` - Delete (org only, protected)

### Application Endpoints
- POST `/internships/:id/apply` - Apply to internship (student only, protected)
- GET `/internships/applications` - View applications (org only, protected)
- PUT `/applications/:id/status` - Accept/reject application (org only, protected)

## Running

```bash
bun run dev
```

Server runs on `http://localhost:3000`

## Next Phase
- Phase 2: Drizzle ORM + PostgreSQL integration
