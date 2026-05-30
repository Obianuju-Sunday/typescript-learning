# Internship & Skill Profiling System (TypeScript Rebuild)

Phase 1 of rebuilding my backend with professional standards.

## Features

✅ Student Registration & Login
✅ Organization Registration & Login  
✅ JWT Authentication (24hr tokens)
✅ Internship Management (CRUD)
✅ Linked data (Internships → Organizations)
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

## Running

```bash
bun run dev
```

Server runs on `http://localhost:3000`

## Next Phase
- Add Drizzle ORM + PostgreSQL