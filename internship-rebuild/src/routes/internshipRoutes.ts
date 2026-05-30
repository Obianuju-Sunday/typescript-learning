import { Router } from "express";
import { createInternship, getAllInternships } from "../controllers/internshipController";
import { checkToken, isOrganisation } from "../middlewares/auth";

const router = Router();

router.post('/', checkToken, isOrganisation, createInternship);
router.get('/', getAllInternships)


export default router;