import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/Admin';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  userEmail!: string;
  admin!: Admin;

  constructor(private userService: UserService) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email)? email : "";
  }

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails(): void {
    this.userService.getAdminByEmail(this.userEmail)
      .subscribe((admin) =>{ 
        this.admin = admin;
      });
  }

  update(): void{

  }

}
