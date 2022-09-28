import { Component, OnInit } from '@angular/core';
import { Student } from '../../../interfaces/Student';
import { StudentService } from '../../../services/student.service';
import { MessageService } from '../../../services/message.service';

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
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe((students) => {
        this.students = students;
      });
  }

}
