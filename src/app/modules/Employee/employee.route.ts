import { Router } from 'express'
import { EmployeeController } from './employee.controller'
import auth from '../../middlewares/auth'
import upload from '../../utils/upload'

const router = Router()

router.post(
    '/create-employee',
    auth('admin'),
    upload.single('image'),
    EmployeeController.createEmployee
)
router.get(
    '/employee',
    auth('admin'),
    EmployeeController.getAllEmployee
)

export const EmployeeRoutes = router
