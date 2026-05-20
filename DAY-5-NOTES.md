# Day 5: Password Hashing + JWT

## What I learned:
- Bcrypt for password hashing
- JWT token generation
- Comparing hashed passwords on login
- Sending tokens to client
- In-memory user storage. This explained why my postman login was working even though I had not pushed the new user into my users array. The user was being created and registered correctly in the memory, but it was not being stored in the users array, which is why I could not see it when I logged the users array. So when I added a console log to see the new user being created, I was able to confirm that the user was being registered correctly in memory, but it was not being stored in the users array. This is why postman was able to login the user, because it was using the in-memory user data, not the users array. This was a great learning moment for me, as it helped me understand how in-memory data storage works and how it can lead to confusion if not properly logged and understood. It also highlighted the importance of logging and debugging to understand the flow of data in an application. The best recommendation is to use a database to store user data, as it provides persistence and allows for better management of user information.


## What I built:
- Password hashing on registration
- Password verification on login
- JWT token generation
- Secure auth flow

## What I struggled with:
- typescript is so strict. My jwt secret was not being recognized as a string, even though I had it defined in my .env file. I had to add an explicit check to ensure it was defined and then use a constant to store it.
- How postman was able to login a uer who was registered but was not pushed into my users array. 

## Next:
- JWT middleware to protect routes
- Internship endpoints