import { Router } from "express";
import { registerStudent, registerOrganisation, login} from "../controllers/authController";

const router = Router();

router.post("/register/student", registerStudent);
router.post("/register/organisation", registerOrganisation);
router.post("/login", login);

export default router;