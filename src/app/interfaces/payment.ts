export interface Payment {
	paymentId: number;
    studentId: number;
	paymentMethod: string;
	amount: number;
	paymentStatus: boolean;
    paymentMethods: string[];
}
