import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../interfaces/course';
import { CourseService } from '../course.service';
import { Student } from '../interfaces/Student';

@Component({
  selector: 'app-enrolled-students',
  templateUrl: './enrolled-students.component.html',
  styleUrls: ['./enrolled-students.component.css']
})
export class EnrolledStudentsComponent implements OnInit {

  course!: Course;
  students!: Student[];
  courseId!: number;
  professorId!: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
    ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.professorId = Number(this.route.snapshot.paramMap.get('professorId'));
    this.courseService.getCourse(this.courseId)
      .subscribe((course) =>{
        this.course = course;
        this.getEnrolledStudentsInCourse();
      });
  }

  getEnrolledStudentsInCourse(): void {
    this.courseService.getEnrolledStudentsInCourse(this.professorId, this.courseId)
      .subscribe(students => this.students = students);
  }

}
