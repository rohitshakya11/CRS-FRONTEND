import { Component, OnInit } from '@angular/core';
import { Professor } from '../Professor';
import { PROFESSORS } from '../professor-list';
import { ProfessorService } from '../professor.service';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})

export class ProfessorsComponent implements OnInit {
  
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getProfessors();
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