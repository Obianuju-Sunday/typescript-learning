import { Request, Response } from "express";
import { Internship } from "../types/types";
import { organisationProfiles, internships } from "../mockData";

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
    createdAt: internship!.createdAt
  };

  const index = internships.findIndex((i) => i.id === id);
  internships[index] = updatedInternship;

  return res.status(200).json({
    message: "Internship updated successfully",
    updatedInternship
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

  internships.splice(index, 1)
  // internships[index]!.isActive = false;

  return res.status(200).json({
    message: "Internship deleted successfully"
  });
}

export { createInternship, getAllInternships, getInternshipById, updateInternship, deleteInternship };

// id: id,
// organisationId: orgId,
