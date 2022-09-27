import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {

  studentId!: number;
  courseId!: number;
  grade!: string;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
    ) {
    this.studentId = Number(this.route.snapshot.paramMap.get('studentId'));
    this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
  }

  ngOnInit(): void {
  }

  addGrade(): void{
    this.courseService.addGrade(this.studentId, this.courseId, this.grade)
      .subscribe((status)=>{
        if(status){
          alert("grade added successfully!")
        }else{
          alert('some error occured!')
        }
        this.router.navigate(['professor-dashboard']);
      });
  }

}
