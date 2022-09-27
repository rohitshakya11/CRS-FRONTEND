import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/interfaces/Professor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {

  userEmail!: string;
  professor!: Professor;

  constructor(private userService: UserService) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email)? email : "";
  }

  ngOnInit(): void {
    this.getProfessorDetails();
  }

  getProfessorDetails(): void {
    this.userService.getProfessorByEmail(this.userEmail)
      .subscribe((professor) =>{ 
        this.professor = professor;
      });
  }

  update(): void{

  }

}
