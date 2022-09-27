import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../interfaces/Professor';
import { ProfessorService } from '../../../services/professor.service';
import { MessageService } from '../../../services/message.service';

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