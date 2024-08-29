import { Router } from "express";
import { EmployeeController } from "./employee.controller";
import auth from "../../middlewares/auth";

const router = Router();


router.post("/create-employee", auth("admin"), EmployeeController.createEmployee);


export const EmployeeRoutes = router;