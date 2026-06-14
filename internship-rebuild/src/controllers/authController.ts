import { Request, Response } from "express";
import { StudentProfile, OrganisationProfile, User } from "../types/types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { organisationProfiles, users, studentProfiles } from "../mockData";
import { db } from "../db/connection";
import {
  usersTable,
  studentsProfilesTable,
  organisationProfilesTable,
} from "../db/schema";
import { eq } from "drizzle-orm";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
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

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(usersTable)
      .values({
        email,
        password: hashedPassword,
        role: "student",
        approved: false,
      })
      .returning();

    if (!newUser || newUser.length === 0) {
      return res.status(500).json({
        error: "Failed to create user.",
      });
    }

    const newStudentProfile = await db
      .insert(studentsProfilesTable)
      .values({
        id: studentProfiles.length + 1,
        userId: newUser[0].id,
        fullName,
        email,
        program,
        yearOfStudy,
        university,
        location,
      })
      .returning();

    return res.status(201).json({
      message: "Student registered successfully!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      error: "Registration failed",
    });
  }
};

const registerOrganisation = async (req: Request, res: Response) => {
  const { email, password, companyName, industry, location } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db
      .insert(usersTable)
      .values({
        email,
        password: hashedPassword,
        role: "organisation",
        approved: false,
      })
      .returning();

    if (!newUser || newUser.length === 0) {
      return res.status(500).json({
        error: "Failed to create user.",
      });
    }

    const newOrganisationProfile = await db
      .insert(organisationProfilesTable)
      .values({
        userId: newUser[0].id,
        companyName,
        email,
        industry,
        location,
      })
      .returning();

    return res.status(201).json({
      message: "Organisation registered successfully!",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      error: "Registration failed",
    });
  }
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
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "24h",
    },
  );

  const result = {
    id: user.id,
    email: user.email,
    role: user.role,
    approved: user.approved,
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

export {
  registerStudent,
  registerOrganisation,
  login,
  allUsers,
  organisationProfiles,
};
