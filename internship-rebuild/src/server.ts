import express, { Request, Response } from "express";
import authRoutes from "./routes/authRoutes";

const app = express();

// Middleware to parse JSON bodies 
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ 
        message: "Welcome to the Internship Rebuild API!" 
    });
});



const PORT = process.env.PORT || 3000;


app.listen(PORT, () =>{
    console.log("WELCOME TO MY INTERNSHIP REBUILD SYSTEM. YAY, IT WORKS!");
})