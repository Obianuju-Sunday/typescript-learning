# Day 6: Auth Middleware + Internship Endpoints

## What I learned:
- Creating auth middleware with JWT verification
- Protecting routes with middleware
- Role-based access control (isOrganization)
- Extending Express Request type for custom properties
- Spread operator (...) to copy object properties
- Optional chaining (?.) for safe property access
- Named exports vs default exports in modules
- How to fix module export conflicts in TypeScript/Bun

## What I built:
- Auth middleware (checkToken using JWT verification)
- Role-based middleware (isOrganization)
- Protected test route (/auth/test)
- Internship type/interface
- Create internship endpoint (orgs only, protected)
- Get all internships endpoint (public, with org names linked)
- Proper module exports for controllers and routes


## What I struggled with:
- The typescript error "Property 'user' does not exist on type 'Request'" was a bit tricky. I had to extend the Express Request interface to include the user property, which is added by the auth middleware after verifying the JWT token. This allows me to access req.user in my route handlers without TypeScript throwing an error.
- The js filter and map methods were a bit confusing at first, especially when trying to link internships to their respective organization names.
- Typescript module export/import syntax can be a bit tricky, especially when deciding between named exports and default exports. I had to refactor my authController exports to use named exports to avoid conflicts and make it easier to import specific functions in my routes.
- Still not conversant with the tsconfig file configuration and how it affects module resolution and type checking. 


## Challenges overcome:
- Module export/import conflicts (I learned named vs default exports)
- Understanding spread operator and optional chaining
- Bun module resolution issues

## Next:
- Get single internship by ID
- Update/delete internship endpoints
- Application endpoints (apply, view applications)
- Then: Phase 