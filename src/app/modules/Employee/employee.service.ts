import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TEmployee } from './employee.interface'
import { Employee } from './employee.model'

const createEmployeeIntoDB = async (
    payload: TEmployee,
    file: Record<string, unknown>
) => {

    const filename = file?.filename;
    

    if(!filename){
        throw new AppError(httpStatus.NOT_FOUND, "Image not uploaded!");
    }

    payload.imgUrl = `/uploads/${filename}`

    const result = await Employee.create(payload)
    return result
}

export const EmployeeServices = {
    createEmployeeIntoDB,
}
