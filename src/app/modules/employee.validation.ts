import { z } from 'zod'

const AddressSchema = z.object({
    district: z.string().min(1, { message: 'District is required.' }),
    city: z.string().min(1, { message: 'City is required.' }),
    upazila: z.string().min(1, { message: 'Upazila is required.' }),
    village: z.string().min(1, { message: 'Village is required.' }),
    houseNo: z.string().min(1, { message: 'House number is required.' }),
})

const EmployeeSchema = z.object({
    birthCertificateNumber: z.string().optional().or(z.literal('')),
    imgUrl: z
        .string()
        .min(1, { message: 'Image URL is required.' })
        .url({ message: 'Image URL must be a valid URL.' }),
    name: z.string().min(1, { message: 'Name is required.' }),
    birthOfDate: z.string().refine(
        (date) => {
            const parsedDate = Date.parse(date)
            return !isNaN(parsedDate)
        },
        { message: 'Birth date must be a valid date.' }
    ),
    fatherName: z.string().min(1, { message: "Father's name is required." }),
    motherName: z.string().min(1, { message: "Mother's name is required." }),
    address: AddressSchema,
    contactNumber: z
        .string()
        .min(1, { message: 'Contact number is required.' })
        .regex(/^\d+$/, {
            message: 'Contact number must contain only digits.',
        }),
    emergencyContactNumber: z
        .string()
        .min(1, { message: 'Emergency contact number is required.' })
        .regex(/^\d+$/, {
            message: 'Emergency contact number must contain only digits.',
        }),
    email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Email must be a valid email address.' }),
    martialStatus: z.enum(['married', 'single', 'divorced'], {
        message:
            "Martial status must be one of 'married', 'single', or 'divorced'.",
    }),
    religion: z.enum(['islam', 'hindu', 'christian'], {
        message: "Religion must be one of 'islam', 'hindu', or 'christian'.",
    }),
    designation: z.string().min(1, { message: 'Designation is required.' }),
    bloodGroup: z.string().min(1, { message: 'Blood group is required.' }),
    joiningDate: z.string().refine(
        (date) => {
            const parsedDate = Date.parse(date)
            return !isNaN(parsedDate)
        },
        { message: 'Joining date must be a valid date.' }
    ),
    resigningDate: z.string().refine(
        (date) => {
            const parsedDate = Date.parse(date)
            return !isNaN(parsedDate)
        },
        { message: 'Resigning date must be a valid date.' }
    ),
})

export default EmployeeSchema
