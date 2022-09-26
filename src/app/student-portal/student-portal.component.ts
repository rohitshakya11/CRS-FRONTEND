import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Grade } from '../Grade';
import { StudentService } from '../service/student.service';
import { Student } from '../Student';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {

  courses: Course[] = [];
  grades: Grade[] = [];
  selectedSemesterId: number = 1;
  selectedCourseId: number = -1;
  userEmail!: string;
  student!: Student;
  selectedPaymentMethod: string = "UPI";

  constructor(private courseService: CourseService, private userService: UserService, private studentService: StudentService) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email)? email : "";
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getCoursesBySemesterId(): void {
    this.courseService.getCoursesBySemesterId(this.selectedSemesterId)
      .subscribe(courses => this.courses = courses);

    this.getRegisteredCoursesInSemester();
  }

  getRegisteredCourses(): void {
    this.courseService.getRegisteredCourses(this.student.id)
      .subscribe(grades => this.grades = grades);
  }

  getRegisteredCoursesInSemester(): void {
    this.courseService.getRegisteredCoursesInSemester(this.student.id, this.selectedSemesterId)
      .subscribe(grades => this.grades = grades);
  }

  getStudentDetails(): void {
    this.userService.getStudentByEmail(this.userEmail)
      .subscribe((student) =>{ 
        this.student = student;
        this.getCoursesBySemesterId();
      });
  }

  update(): void{

  }

  makePayment(): void{
    this.studentService.makePayment(this.student.id, this.selectedPaymentMethod)
      .subscribe((payment) =>{ 
        if(payment.paymentStatus){
          alert(`Payment Successful of ${payment.amount}!`);
        }
      });
  }

}
