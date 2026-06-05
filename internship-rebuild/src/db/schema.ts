import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: varchar("password").notNull(),
  role: varchar("role").notNull(),
  approved: boolean("approved").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studentsProfilesTable = pgTable("student_profile", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id),
  fullName: varchar("full_name").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  program: varchar("program").notNull(),
  yearOfStudy: integer("year_of_study").notNull(),
  university: varchar("university").notNull(),
  bio: varchar("bio"),
  portfolioLink: varchar("portfolio_link"),
  phone: varchar("phone"),
  createdAt: timestamp("created_at").defaultNow(),
  location: varchar("location").notNull(),
});

export const organisationProfilesTable = pgTable("organisation_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id),
  companyName: varchar("company_name").notNull(),
  industry: varchar("industry").notNull(),
  niche: varchar("niche"),
  description: varchar("description"),
  website: varchar("website"),
  location: varchar("location").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const internshipsTable = pgTable("internships", {
  id: serial("id").primaryKey(),
  organisationId: integer("organisation_id").references(
    () => organisationProfilesTable.id,
  ),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
  requirements: varchar("requirements"),
  location: varchar("location").notNull(),
  duration: varchar("duration").notNull(),
  stipend: varchar("stipend"),
  otherInfo: varchar("other_info"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const applicationsTable = pgTable("applications", {
  id: serial("id").primaryKey(),
  internshipId: integer("internship_id").references(() => internshipsTable.id),
  studentId: integer("student_id").references(() => studentsProfilesTable.id),
  coverLetter: varchar("cover_letter").notNull(),
  status: varchar("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const skillsTable = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studentSkillsTable = pgTable("student_skills", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").references(() => studentsProfilesTable.id),
  skillId: integer("skill_id").references(() => skillsTable.id),
  createdAt: timestamp("created_at").defaultNow(),
});