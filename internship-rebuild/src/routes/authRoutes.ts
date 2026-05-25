import { Router } from "express";
import { registerStudent, registerOrganisation, login} from "../controllers/authController";
import { checkToken, isOrganisation } from "../middlewares/auth";

const router = Router();

router.post("/register/student", registerStudent);
router.post("/register/organisation", registerOrganisation);
router.post("/login", login);

// Test route to verify authentication and role-based access control
router.get("/test", checkToken, isOrganisation, (req, res) => {
    res.status(200).json({
        message: "You have access to this route because you are an authenticated organisation!"
    });
});

export default router;