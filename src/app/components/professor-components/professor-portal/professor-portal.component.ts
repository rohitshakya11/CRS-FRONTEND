import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CourseService } from '../../../services/course.service';
import { Professor } from '../../../interfaces/Professor';
import { Student } from '../../../interfaces/Student';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-professor-portal',
  templateUrl: './professor-portal.component.html',
  styleUrls: ['./professor-portal.component.css']
})
export class ProfessorPortalComponent implements OnInit {

  professor!: Professor;
  userEmail!: string;
  courses!: Course[];
  selectedCourseId!: number;
  students!: Student[];

  constructor(private userService: UserService, private courseService: CourseService) {
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
        this.getCoursesAssigned();
      });
  }

  getCoursesAssigned(): void {
    this.courseService.getCoursesAssigned(this.professor.id)
      .subscribe(courses => this.courses = courses);
  }

  getEnrolledStudentsInCourse(): void {
    this.courseService.getEnrolledStudentsInCourse(this.professor.id, this.selectedCourseId)
      .subscribe(students => this.students = students);
  }

  update(): void{
    
  }
}
