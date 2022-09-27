import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../interfaces/Admin';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  admin!: Admin;
  userEmail!: string;

  constructor(private userService: UserService) {
    const email = localStorage.getItem('userEmail');
    this.userEmail = (email)? email : "";
  }

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails(): void {
    this.userService.getAdminByEmail(this.userEmail)
      .subscribe(admin => this.admin = admin);
  }

  update(): void{
    
  }

}
