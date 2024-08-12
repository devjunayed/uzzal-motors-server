import express from 'express'
import { EmployeeRoutes } from '../modules/Employee/employee.route'

const router = express.Router()

const moduleRoutes = [
    {
        path: '/',
        route: EmployeeRoutes,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
