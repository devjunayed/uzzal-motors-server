import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { sendResponse } from '../../utils/sendResponse'
import { EmployeeServices } from './employee.service'

const createEmployee = catchAsync(async (req, res) => {
    const result = await EmployeeServices.createEmployeeIntoDB(
        req.body,
        req.file
    )

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Employee created successfully',
        data: result,
    })
})

export const EmployeeController = {
    createEmployee,
}
