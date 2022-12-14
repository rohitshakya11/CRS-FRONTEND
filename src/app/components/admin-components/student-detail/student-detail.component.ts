import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { Student } from '../../../interfaces/Student';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student!: Student;
  userEmail!: string;

  constructor(private adminService: AdminService, private userService: UserService, private route: ActivatedRoute) {
    const userEmail = this.route.snapshot.paramMap.get('userEmail');
    this.userEmail = (userEmail) ? userEmail : "";
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails(): void {
    this.userService.getStudentByEmail(this.userEmail)
      .subscribe((student) => {
        this.student = student;
        console.log(".........................", student);
      });
  }

  add(): void {

  }

  approveStudentRegistration(): void {
    if(this.student.approvedByAdmin==true){
      this.adminService.approveStudentRegistration(this.student.id)
      .subscribe((student) => {
        if (student != undefined) {
          alert("student registration approved successfully!");
        }
        else {
          alert("some error occured!");
        }
      });
    }
    else{
      alert("can not dis-approve student registration!");
    }
  }

  approveStudentCourseRegistration(): void {
    if(this.student.coursesApprovedByAdmin==true){
      this.adminService.approveStudentCourseRegistration(this.student.id)
      .subscribe((student) => {
        if (student != undefined) {
          alert("student course registration approved successfully!");
        }
        else {
          alert("some error occured!");
        }
      });
    }
    else{
      alert("can not dis-approve student course registration!");
    }
  }

  generateReportCard(): void {
    if(this.student.reportCardGenerated==true){
      this.adminService.generateReportCard(this.student.id)
      .subscribe((student) => {
        if (student != undefined) {
          alert("report card generated successfully!");
        }
      });
    }
    else{
      alert("can not un-generate report card!");
    }
  }

  generateBill(): void {
    if(this.student.paymentStatus==false){
      this.adminService.generateBill(this.student.id)
      .subscribe((amount) => {
        if(amount!=-1){
          alert("bill generated successfully!");
        }
      });
    }

    // if(this.student.billGenerated==true){
    //   this.adminService.generateBill(this.student.id)
    //   .subscribe((amount) => {
    //     if(amount!=-1){
    //       alert("bill generated successfully!");
    //     }
    //   });
    // }
    // else{
    //   alert("some error occured!");
    // }
  }

  delete(): void {

  }

}
