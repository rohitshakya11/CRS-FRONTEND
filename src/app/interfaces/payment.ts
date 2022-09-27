export interface Payment {
    studentId: number;
	paymentMethod: string;
	amount: number;
	paymentStatus: boolean;
    paymentMethods: string[];
}
