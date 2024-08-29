import express from 'express'
import { EmployeeRoutes } from '../modules/Employee/employee.route'
import { AuthRoutes } from '../modules/Auth/auth.route'

const router = express.Router()

const moduleRoutes = [
    {
        path: '/',
        route: EmployeeRoutes,
    },
    {
        path: "/auth",
        route: AuthRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
