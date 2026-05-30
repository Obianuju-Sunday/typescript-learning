import { Router } from "express";
import { createInternship, getAllInternships, getInternshipById, updateInternship, deleteInternship } from "../controllers/internshipController";
import { checkToken, isOrganisation } from "../middlewares/auth";

const router = Router();

router.post('/', checkToken, isOrganisation, createInternship);
router.get('/', getAllInternships);
router.get('/:id', getInternshipById);
router.put('/:id', checkToken, isOrganisation, updateInternship);
router.delete('/:id', checkToken, isOrganisation, deleteInternship);


export default router;