import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CourseService } from '../../../services/course.service';
import { Grade } from '../../../interfaces/Grade';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../interfaces/Student';
import { UserService } from '../../../services/user.service';
import { Payment } from 'src/app/interfaces/payment';
import { PaymentService } from 'src/app/services/payment.service';

import { ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-generate-report-card',
  templateUrl: './generate-report-card.component.html',
  styleUrls: ['./generate-report-card.component.css']
})

export class GenerateReportCardComponent implements OnInit {

  @ViewChild('invoice') invoiceElement!: ElementRef;

  courses: Course[] = [];
  grades: Grade[] = [];
  selectedSemesterId: number = 1;
  selectedCourseId: number = -1;
  userEmail!: string;
  student!: Student;
  selectedPaymentMethod: string = "UPI";
  amount: number = 0;
  payments: Payment[] = [];

  constructor(private courseService: CourseService,
    private userService: UserService,
    private studentService: StudentService,
    private paymentService: PaymentService
  ) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email) ? email : "";
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 200;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
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
      .subscribe((student) => {
        this.student = student;
        this.getCoursesBySemesterId();
        this.getPaymentsByStudentId();
      });
  }

  update(): void {
  }

  getPaymentsByStudentId(): void {
    this.paymentService.getPaymentsByStudentId(this.student.id)
      .subscribe(payments => this.payments = payments);
  }



}

