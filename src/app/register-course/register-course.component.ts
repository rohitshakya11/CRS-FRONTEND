import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  course!: Course;
  isCoursePrimary: boolean = true;
  courseId!: number;
  studentId!: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
    this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.courseService.getCourse(this.courseId)
      .subscribe(course => this.course = course);
  }

  register(): void{
    this.courseService.registerCourse(this.courseId, this.studentId, this.course.semesterId, Number(this.isCoursePrimary))
      .subscribe((status)=>{
        if(status){
          alert("course registered successfully!")
        }else{
          alert('some error occured!')
        }
        this.router.navigate(['student-dashboard']);
      }
    );
  }

  deRegister(): void{
    this.courseService.deRegisterCourse(this.courseId, this.studentId)
      .subscribe((status)=>{
        if(status){
          alert("course de-registered successfully!")
        }else{
          alert('some error occured!')
        }
        this.router.navigate(['student-dashboard']);
      }
    );
  }

}
