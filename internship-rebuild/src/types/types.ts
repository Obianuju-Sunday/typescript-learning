export interface User {
    id: number;
    email: string;
    password: string;
    role: string;
    approved: boolean;
    createdAt: Date;
}

export interface StudentProfile {
    studentId: number;
    userId: number;
    fullName: string;
    email: string;
    program: string;
    yearOfStudy: number;
    university: string;
    bio?: string;
    portfolioLink?: string;
    phone?: string;
    createdAt: Date;
    location: string;
}

export interface OrganisationProfile {
    organisationId: number;
    userId: number;
    companyName: string;
    email: string;
    industry: string;
    niche?: string;
    description?: string;
    website?: string;
    // phone?: string;
    location: string;
    createdAt: Date;
}

export interface Skill {
    id: number;
    name: string;
    createdAt: Date;
}

export interface StudentSkill {
    id: number;
    studentId: number;
    skillId: number;
    createdAt: Date;
}

export interface Internship {
    id: number;
    organisationId: number;
    title: string;
    description: string;
    requirements?: string;
    location: string;
    duration: string;
    stipend?: string;
    otherInfo?: string;
    isActive: boolean; // New field to indicate if the internship is active. by default, it will be true when created and can be set to false when the internship is closed.
    createdAt: Date;
}

export interface Application {
    id: number;
    internshipId: number;
    studentId: number;
    status: 'pending' | 'accepted' | 'rejected';
    coverLetter?: string;
    appliedAt: Date;
}




