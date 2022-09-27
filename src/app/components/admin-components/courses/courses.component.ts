import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import {Course} from '../../../interfaces/course';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  hero!:string;

  courses: Course[] = [];

  selectedCourse?: Course;

  constructor(private courseService: CourseService, private messageService: MessageService) { 
    this.hero="rohit";
  }

  ngOnInit(): void {
    this.getCourses();
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.messageService.add(`HeroesComponent: Selected hero id=${course.id}`);
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  delete(course: Course): void {
    this.courses = this.courses.filter(h => h !== course);
    this.courseService.deleteCourse(course.id).subscribe();
  }

}