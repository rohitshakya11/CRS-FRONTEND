import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.studentService.getProfessors()
      .subscribe((students) => 
      { console.log("professors: ", students);
        this.students = students;
       }
      );
  }

}
