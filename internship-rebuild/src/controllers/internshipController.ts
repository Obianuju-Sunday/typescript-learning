import { Request, Response } from "express";
import { Internship, Application } from "../types/types";
import { organisationProfiles, internships, applications } from "../mockData";

const createInternship = (req: Request, res: Response) => {
  const {
    title,
    description,
    requirements,
    location,
    duration,
    stipend,
    otherInfo,
  } = req.body;

  const orgId = req.user!.id;
  const newInternship: Internship = {
    id: internships.length + 1,
    organisationId: orgId,
    title,
    description,
    requirements,
    stipend,
    duration,
    location,
    otherInfo,
    isActive: true,
    createdAt: new Date(),
  };

  internships.push(newInternship);

  return res.status(201).json({
    message: "Internship created successfully",
    newInternship,
  });
};

const getAllInternships = (req: Request, res: Response) => {
  const activeInternships = internships.filter(
    (aInternship) => aInternship.isActive,
  );

  const result = activeInternships.map((internship) => {
    const org = organisationProfiles.find(
      (org) => org.organisationId === internship.organisationId,
    );

    return {
      ...internship,
      companyName: org?.companyName,
    };
  });

  return res.status(200).json({
    message: "Internships fetched successfully.",
    result,
  });
};

const getInternshipById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const internship = internships.find(
    (singleInternship) => id === singleInternship.id,
  );

  if (!internship) {
    return res.status(404).json({
      error: "Internship not found",
    });
  }

  const internshipOrg = organisationProfiles.find(
    (org) => org.id === internship?.organisationId,
  );

  const result = {
    ...internship,
    companyName: internshipOrg?.companyName,
  };

  return res.status(200).json({
    message: "Internship fetched successfully",
    result,
  });
};

const updateInternship = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const {
    title,
    description,
    requirements,
    location,
    duration,
    stipend,
    otherInfo,
  } = req.body;

  const orgId = req.user?.id;
  const internship = internships.find(
    (singleInternship) => id === singleInternship?.id,
  );

  const updatedInternship: Internship = {
    id: internship!.id,
    organisationId: orgId!,
    title,
    description,
    requirements,
    stipend,
    duration,
    location,
    otherInfo,
    isActive: internship!.isActive,
    createdAt: internship!.createdAt,
  };

  const index = internships.findIndex((i) => i.id === id);
  internships[index] = updatedInternship;

  return res.status(200).json({
    message: "Internship updated successfully",
    updatedInternship,
  });
};

const deleteInternship = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = internships.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Internship not found",
    });
  }

  internships.splice(index, 1);

  return res.status(200).json({
    message: "Internship deleted successfully",
  });
};

const applyToInternship = (req: Request, res: Response) => {
  const internshipId = Number(req.params.id);
  const studentId = req.user!.id;
  const {coverLetter} = req.body;

  const internship = internships.find((i) => i.id === internshipId);

  if(!internship) {
    return res.status(404).json({
      error: "Internship not found."
    })
  }

  if(!coverLetter) {
    return res.status(400).json({
      error: "Missing required fields."
    })
  }

  const newApplication: Application = {
    id: applications.length + 1,
    internshipId,
    studentId,
    status: "pending",
    coverLetter,
    appliedAt: new Date(),
  }

  applications.push(newApplication);

  return res.status(201).json({
    message: "Application submitted successfully."
  })
}

export {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
  applyToInternship
};
