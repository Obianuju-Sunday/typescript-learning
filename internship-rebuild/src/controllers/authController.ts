import { Request, Response } from "express";
import { StudentProfile, OrganisationProfile, User } from "../types/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}
// Mock data for all users (both students and organisations)
let users: User[] = [
  {
    id: 1,
    email: "amina@student.com",
    password: "student123",
    role: "student",
    approved: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    email: "chinedu@student.com",
    password: "student123",
    role: "student",
    approved: false,
    createdAt: new Date(),
  },
  {
    id: 3,
    email: "techsolutions@organisation.com",
    password: "organisation123",
    role: "organisation",
    approved: false,
    createdAt: new Date(),
  },
  {
    id: 4,
    email: "greenenergy@organisation.com",
    password: "organisation123",
    role: "organisation",
    approved: false,
    createdAt: new Date(),
  },
  {
    id: 5,
    email: "tech@technova.com",
    password: "organisation123",
    role: "organisation",
    approved: false,
    createdAt: new Date(),
  },
  {
    id: 6,
    email: "hr@brightfuture.com",
    password: "organisation123",
    role: "organisation",
    approved: false,
    createdAt: new Date(),
  },
];

// Student mock data
let studentProfiles: StudentProfile[] = [
  {
    id: 1,
    userId: 1,
    fullName: "Amina Yusuf",
    email: "amina@student.com",
    program: "Information Technology",
    yearOfStudy: 4,
    university: "Abia State University",
    location: "Aba",
    createdAt: new Date(),
  },
  {
    id: 2,
    userId: 2,
    fullName: "Chinedu Okafor",
    email: "chinedu@student.com",
    program: "Computer Science",
    yearOfStudy: 3,
    university: "UNN",
    location: "Nsukka",
    createdAt: new Date(),
  },
];

// Organisation mock data
let organisationProfiles: OrganisationProfile[] = [
  {
    id: 1,
    userId: 3,
    companyName: "Tech Solutions Ltd",
    email: "techsolutions@organisation.com",
    industry: "Technology",
    location: "Lagos",
    createdAt: new Date(),
  },
  {
    id: 2,
    userId: 4,
    companyName: "Green Energy Inc",
    email: "greenenergy@organisation.com",
    industry: "Renewable Energy",
    location: "Abuja",
    createdAt: new Date(),
  },
  {
    id: 3,
    userId: 5,
    companyName: "TechNova Solutions",
    email: "tech@technova.com",
    industry: "Technology",
    location: "Lagos",
    createdAt: new Date(),
  },
  {
    id: 4,
    userId: 6,
    companyName: "Bright Future Labs",
    email: "hr@brightfuture.com",
    industry: "Technology",
    location: "Lagos",
    createdAt: new Date(),
  },
];

const registerStudent = async (req: Request, res: Response) => {
  const {
    email,
    password,
    fullName,
    program,
    yearOfStudy,
    university,
    location,
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: users.length + 1,
    email,
    password: hashedPassword,
    role: "student",
    approved: false,
    createdAt: new Date(),
  };

  // console.log("New student user is registered:", newUser);

  users.push(newUser);

  const newStudentProfile: StudentProfile = {
    id: studentProfiles.length + 1,
    userId: newUser.id,
    fullName,
    email,
    program,
    yearOfStudy,
    university,
    location,
    createdAt: new Date(),
  };

  studentProfiles.push(newStudentProfile);

  return res.status(201).json({
    message: "Student registered successfully!",
  });
};

const registerOrganisation = async (req: Request, res: Response) => {
  const { email, password, companyName, industry, location } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: users.length + 1,
    email,
    password: hashedPassword,
    role: "organisation",
    approved: false,
    createdAt: new Date(),
  };

  users.push(newUser);

  const newOrganisationProfile: OrganisationProfile = {
    id: organisationProfiles.length + 1,
    userId: newUser.id,
    companyName,
    email,
    industry,
    location,
    createdAt: new Date(),
  };

  organisationProfiles.push(newOrganisationProfile);

  return res.status(201).json({
    message: "Organisation registered successfully!",
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Please provide both email and password.",
    });
  }

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      error: "Invalid credentials.",
    });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(401).json({
      error: "Invalid credentials.",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "24h"
    }
  )

  const result = {
    id: user.id,
    email: user.email,
    role: user.role,
    approved: user.approved
  };

  return res.status(200).json({
    message: "Login successful!",
    token,
    user: result,
  });
};

export { registerStudent, registerOrganisation, login };
