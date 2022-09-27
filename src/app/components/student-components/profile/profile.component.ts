import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/Student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userEmail!: string;
  student!: Student;

  constructor(private userService: UserService) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email)? email : "";
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails(): void {
    this.userService.getStudentByEmail(this.userEmail)
      .subscribe((student) =>{ 
        this.student = student;
      });
  }

  update(): void{

  }

}
