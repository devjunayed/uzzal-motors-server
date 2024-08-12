import { Router } from "express";
import { EmployeeController } from "./employee.controller";

const router = Router();


router.post("/create-employee", EmployeeController.createEmployee);


export const EmployeeRoutes = router;