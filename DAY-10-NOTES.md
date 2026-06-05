# Day 9: Drizzle ORM + PostgreSQL - Phase 2 Started! 🚀

## What I learned:
- What ORM is (bridge between TypeScript and database)
- What schema is (blueprint of database)
- What migrations are (SQL files that create tables)
- Foreign key relationships in database
- Many-to-many relationships (skills & student_skills)
- Drizzle schema definition with pgTable

## What I built:
- 7 table schemas in TypeScript:
  - users (with roles: student/organisation)
  - student_profiles (FK to users)
  - organisation_profiles (FK to users)
  - internships (FK to organisation_profiles)
  - applications (FK to student_profiles & internships)
  - skills (lookup table)
  - student_skills (many-to-many junction table)
- Generated migration files
- Successfully ran migrations in PostgreSQL
- Verified all tables exist in database

## Challenges overcome:
- PostgreSQL peer authentication issue stressed me shaaa!
- Fixed pg_hba.conf authentication method with the help of ClaudeAI
- Set postgres user password
- Created internship_db database
- Successfully connected Drizzle to PostgreSQL

## Key insights:
- Primary keys = unique identifier for THIS table
- Foreign keys = pointer to another table's primary key
- Junction tables = handle many-to-many relationships
- .unique() prevents duplicate entries
- defaultNow() auto-fills timestamps

## Phase 2 Status:
✅ Schema designed and created
✅ Migrations generated and applied
✅ Database tables exist in PostgreSQL
⏳ Next: Integrate Drizzle queries into controllers
⏳ Replace mock arrays with REAL database queries