import { Course } from "./course";
import { Student } from "./Student";

export interface Grade {
    grade: string;
    student: Student;
    course: Course;
    isCoursePrimary: number;
    isApprovedByAdmin: number;
    marksObtained: number;
    totalMarks: number;
    examDate: Date;
}