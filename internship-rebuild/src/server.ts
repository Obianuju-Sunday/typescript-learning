import express, { Request, Response } from "express";
import authRoutes from "./routes/authRoutes";
import internshipRoutes from "./routes/internshipRoutes";

const app = express();

// Middleware to parse JSON bodies 
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/internships", internshipRoutes);

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ 
        message: "Welcome to my Internship Rebuild API." 
    });
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})