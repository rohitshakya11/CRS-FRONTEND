import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../interfaces/course';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.course) {
      this.courseService.updateCourse(this.course)
        .subscribe(() => this.goBack());
    }
  }

  update(): void {
    if (this.course) {
      this.courseService.updateCourse(this.course)
        .subscribe(() => this.goBack());
    }
  }

  add(): void {
    this.courseService.addCourse(this.course)
      .subscribe(newCourse => {
        this.goBack();
      });
  }

  delete(): void {
    this.courseService.deleteCourse(this.course.id)
      .subscribe(newCourse => {
        this.goBack();
      });
  }
}
