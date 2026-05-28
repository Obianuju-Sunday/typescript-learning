import { Router } from "express";
import { createInternship, getAllInternships } from "../controllers/internshipController";
import { checkToken, isOrganisation } from "../middlewares/auth";

const router = Router();

router.post('/internships', checkToken, isOrganisation, createInternship);
router.get('/internships', getAllInternships)


export default router;