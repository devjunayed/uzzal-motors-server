import { TEmployee } from "./employee.interface";
import { Employee } from "./employee.model"

const createEmployeeIntoDB = async (payload: TEmployee) => {
    const result = await Employee.create(payload);
    return result;
}


export const EmployeeServices = {
    createEmployeeIntoDB
}