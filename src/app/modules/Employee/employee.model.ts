import { model, Schema } from 'mongoose';
import { TEmployee } from './employee.interface';

const AddressSchema = new Schema({
    district: { type: String, required: true },
    city: { type: String, required: true },
    upazila: { type: String, required: true },
    village: { type: String, required: true },
    houseNo: { type: String, required: true },
});

const EmployeeSchema = new Schema({
    id: { type: String, unique: true },
    birthCertificateNidNumber: { type: String, required: true },
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    birthOfDate: { type: Date, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    email: { type: String, required: true },
    martialStatus: {
        type: String,
        required: true,
        enum: ['married', 'single', 'divorced'],
    },
    religion: {
        type: String,
        required: true,
        enum: ['islam', 'hindu', 'christian'],
    },
    designation: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    joiningDate: { type: String, required: true },
    resigningDate: { type: String },
    isCertificateIssued: { type: Boolean, default: false },
});

// Pre-save hook to generate a unique ID
EmployeeSchema.pre('save', async function (next) {
    if (!this.isNew) return next();

    try {
        // Get the highest current employee ID
        const lastEmployee = await Employee.findOne().sort({ id: -1 }).limit(1);

        let currentIdNumber = 1; // Default to 1 if no previous employees

        if (lastEmployee) {
            const lastEmployeeId = lastEmployee.id.split('-')[1];
            currentIdNumber = Number(lastEmployeeId) + 1;
        }

        this.id = `MUM-${currentIdNumber.toString().padStart(3, '0')}`;
        next();
    } catch (error) {
        next(error);
    }
});

export const Employee = model<TEmployee>('employee', EmployeeSchema);
