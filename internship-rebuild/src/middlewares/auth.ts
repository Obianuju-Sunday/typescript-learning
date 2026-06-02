import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT secret key is not defined in env");
}

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Access token required.",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
  return res.status(401).json({
    error: "Access denied. No token provided.",
  });
}
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded as {
        id: number,
        email: string,
        role: string
    };
    next();
  } catch (err) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
};

const isOrganisation = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
        return res.status(401).json({
            error: "Unauthorized. No user information found."
        });
    }

    if (user.role !== "organisation") {
        return res.status(403).json({
            error: "Forbidden. You do not have access to this resource."
        });
    }

    next();
}

const isStudent = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if(!user){
    return res.status(401).json({
      error: "Unauthorized. No user information found."
    });
  }

  if(user.role !== "student"){
    return res.status(403).json({
      error: "Forbidden. You do not have access to this resource."
    });
  }

  next();
}

export {
    checkToken,
    isOrganisation,
    isStudent
};

