export interface Student {
    id: number;
    name: string;
    emailId: string;
    password: string;
    mobileNumber: number;
    address: string;
    approvedByAdmin: boolean;
    coursesApprovedByAdmin: boolean;
    reportCardGenerated: boolean;
    role: string;
    paymentStatus: boolean;
    billGenerated: boolean;
}