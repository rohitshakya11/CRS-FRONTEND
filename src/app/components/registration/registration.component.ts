import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName!: string;
  userEmailId!: string;
  userPassword!: string;
  userRole: string = "student";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void{
    this.userService.register(this.userName, this.userEmailId, this.userPassword, this.userRole)
      .subscribe(status => {
        if(status){
          localStorage.setItem('userEmail', this.userEmailId);
          this.router.navigate(['login']);
        }
        else{
          alert("invalid credentials!");
        }
      });
  }

}
