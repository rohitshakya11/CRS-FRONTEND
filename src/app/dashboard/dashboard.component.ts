import { Component, OnInit } from '@angular/core';
import { Course} from '../interfaces/course';
import { CourseService } from '../course.service';
import { Professor } from '../interfaces/Professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
    this.getProfessors();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses.slice(1, 5));
  }

  getProfessors(): void {
    this.professorService.getProfessors()
      .subscribe((professors) => 
      { console.log("professors: ", professors);
        this.professors = professors;
       }
      );
  }

}