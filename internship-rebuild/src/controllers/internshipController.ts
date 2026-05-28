import { Request, Response } from 'express';
import { Internship } from '../types/types';
import { organisationProfiles, internships } from '../mockData';

const createInternship = ( req: Request, res: Response) => {
    const { title, description, location, duration} = req.body;

    const orgId = req.user!.userId;
    const newInternship: Internship = {
        id: internships.length + 1,
        orgId,
        title,
        description,
        duration,
        location,
        isActive: true,
        createdAt: new Date()
    }

    internships.push(newInternship);

    return res.status(201).json({
        message: "Internship created successfully",
        newInternship
    })
}

const getAllInternships = (req: Request, res: Response) => {

    const activeInternships = internships.filter((aInternship => aInternship.isActive));
    const result = activeInternships.map(internship => {
        const org = organisationProfiles.find(org => org.id === internship.orgId)
        return {
            ...internships,
        companyName: org?.companyName
    }
    })

    return res.status(200).json({
        message: "Internships fetched successfully.",
        result
    })
}

export {
    createInternship,
    getAllInternships
}