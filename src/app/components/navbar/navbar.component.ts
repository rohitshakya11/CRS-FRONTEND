import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userRole!: string;

  isStudent: boolean = false;
  isProfessor: boolean = false;
  isAdmin: boolean = false;

  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService, private authGuard: AuthGuard) {
  }

  ngOnInit(): void {

    if (localStorage.getItem('isLoggedIn') == "true") {
      this.isLoggedIn = true;
    }

    const userRole = localStorage.getItem('userRole');
    this.userRole = (userRole)? userRole : "";

    if(this.userRole=="student"){
      this.isStudent=true;
    }
    else if(this.userRole=="professor"){
      this.isProfessor=true;
    }
    else if(this.userRole=="admin"){
      this.isAdmin=true;
    }
  }

  logout() {
    this.authService.logout();  
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  } 

}
