import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user!:User;

  constructor(private userService: UserService, private location: Location, private router: Router) {
    this.user={id:-1,emailId:"", password:"",role:"student",mobileNumber:-1}
  }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.user)
      .subscribe(loggedInUser => {
        if(loggedInUser!=undefined){

          localStorage.setItem('userEmail', loggedInUser.emailId);
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('userRole', loggedInUser.role);

          if(loggedInUser.role=="student"){
            this.router.navigate(['student-dashboard']).then(() => {
              window.location.reload();
            });
          }
          else if(loggedInUser.role=="professor"){
            this.router.navigate(['professor-dashboard']).then(() => {
              window.location.reload();
            });
          }
          else if(loggedInUser.role=="admin"){
            this.router.navigate(['admin-dashboard']).then(() => {
              window.location.reload();
            });
          }
          else{
            alert("invalid credentials!");
          }
          
        }
        else{
          alert("invalid credentials!");
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

}
