# Day 4: Bun + Phase 1 Start

## What I learned:
- Installing and using Bun runtime
- Running TypeScript directly with Bun (no compilation whatsoever)
- Defining complex types for my domain
- Building auth endpoints with TypeScript
- Mock data approach (arrays instead of DB)
- I learned that I need to return after sending a response to prevent further code execution, which can lead to errors or unintended behavior. This was a common issue in my auth controller where I forgot to return after sending a response, causing the function to continue executing and potentially send multiple responses.

## What I built:
- Switched Day 3 Express app to Bun
- New project: internship-rebuild
- User, StudentProfile, OrganizationProfile, Skill, StudentSkill, Internship, Application types
- Auth controller with register/login
- Auth routes

## What I struggled with:
- Adding script to package.json for running with Bun
- 
## Next:
- Hash passwords (bcrypt)
- JWT tokens
- Internship endpoints