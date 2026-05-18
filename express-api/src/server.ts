import express, { Request, Response } from "express";
import { User } from "./types";

const app = express();
const PORT = 3000;

const users: User[] = [
  { id: 1, name: "Obianuju", email: "obianuju@example.com" },
  { id: 2, name: "Joy", age: 30 },
];

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ 
    message: "Hello TypeScript + Express!" 
    });
});

// get all user
app.get("/users", (req: Request, res: Response) => {
  res.status(200).json(users);
}); 

// get one user by id
app.get("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
// const foundUser = users.find(id); This is what i wrote initially until i googled how to use the find method on google, but then i have not understand it yet
  const foundUser = users.find(u => u.id === id);
  if (foundUser) {
    res.status(200).json({
        message: "User fetched",
        foundUser});
  } else res.status(404).json({
        error: "User not found."
    });
});

app.post("/users", (req: Request, res: Response) => {
    const newUser: User = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }

    users.push(newUser);
    res.status(201).json({
        message: "User created successfully.",
        newUser
    })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
