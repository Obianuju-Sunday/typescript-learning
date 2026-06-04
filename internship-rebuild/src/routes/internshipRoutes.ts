import { Router } from "express";
import { createInternship, getAllInternships, getInternshipById, updateInternship, deleteInternship, applyToInternship, getApplicationsForInternships, updateApplicationStatus} from "../controllers/internshipController";
import { checkToken, isOrganisation, isStudent } from "../middlewares/auth";

const router = Router();

router.post('/', checkToken, isOrganisation, createInternship);
router.put('/:id', checkToken, isOrganisation, updateInternship);
router.delete('/:id', checkToken, isOrganisation, deleteInternship);
router.post('/:id/apply', checkToken, isStudent, applyToInternship);
router.get('/applications', checkToken, isOrganisation, getApplicationsForInternships);
router.put('/:id/status', checkToken, isOrganisation, updateApplicationStatus);
router.get('/', getAllInternships);
router.get('/:id', getInternshipById);


export default router;