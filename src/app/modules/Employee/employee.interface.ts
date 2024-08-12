export type TEmployee = {
    id: string
    nid?: string
    birthCertificateNumber?: string
    imgUrl: string
    name: string
    birthOfDate: string
    fatherName: string
    motherName: string
    address: {
        district: string
        city: string
        upazila: string
        village: string
        houseNo: string
    }
    contactNumber: string
    emergencyContactNumber: string
    email: string
    martialStatus: 'married' | 'single' | 'divorced'
    religion: 'islam' | 'hindu' | 'christian'
    designation: string
    bloodGroup: string
    joiningDate: string;
    resigningDate: string
}
