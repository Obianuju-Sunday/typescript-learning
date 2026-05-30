import { Request, Response } from "express";
import { StudentProfile, OrganisationProfile, User } from "../types/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { organisationProfiles, users, studentProfiles } from '../mockData';

const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables.");
}

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

  users.push(newUser);

  const newStudentProfile: StudentProfile = {
    studentId: studentProfiles.length + 1,
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
    organisationId: organisationProfiles.length + 1,
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

const allUsers = (req: Request, res: Response) => {
  return res.status(200).json(users);
};


export { registerStudent, registerOrganisation, login, allUsers, organisationProfiles };
