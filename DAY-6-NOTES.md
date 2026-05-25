# Day 6: Auth Middleware

## What I learned:
- Creating auth middleware with JWT verification
- Protecting routes with middleware
- Role-based access control (isOrganization)
- Extending Express Request type for custom properties

## What I built:
- Auth middleware (JWT verification)
- Role-based middleware (isOrganization)
- Protected test route (/auth/test)
- Internship type/interface


## What I struggled with:
- The typescript error "Property 'user' does not exist on type 'Request'" was a bit tricky. I had to extend the Express Request interface to include the user property, which is added by the auth middleware after verifying the JWT token. This allows me to access req.user in my route handlers without TypeScript throwing an error.

## Next:
- Internship routes and controllers
- Create internship
- Get all internship
- Get single internship
- Update/delete internships