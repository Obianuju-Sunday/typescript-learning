# Day 7: Internship CRUD + ID Management

## What I learned:
- Optional fields handling in requests
- The way around using find, filter, and findIndex js array methods

## What I built:
- GET /internships/:id endpoint
- PUT /internships/:id update endpoint
- DELETE /internships/:id delete endpoint
- Optional fields (stipend, requirements, otherInfo) working properly

## What I struggled with:
- Understanding why deleted IDs left gaps
- Id renumbering logic on delete was a bit tricky to implement correctly( Still hasn't fully figured out how to do it without mutating the original array, which is not ideal. Phewww!)

## Key insights:
- ID generation should be centralized in create function
- Don't use array.length
- Renumbering on delete keeps IDs sequential and clean

## Next:
- Build Application endpoints (Phase 1 final)
- Apply to internship
- View applications
- Accept/reject applications