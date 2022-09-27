import { AuthGuard } from './guards/auth.guard';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { ProfessorPortalComponent } from './professor-portal/professor-portal.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { RegisterCourseComponent } from './register-course/register-course.component';
import { EnrolledStudentsComponent } from './enrolled-students/enrolled-students.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CourseSearchComponent,
    NavbarComponent,
    StudentsComponent,
    ProfessorsComponent,
    RegistrationComponent,
    LoginComponent,
    StudentPortalComponent,
    ProfessorPortalComponent,
    AdminPortalComponent,
    RegisterCourseComponent,
    EnrolledStudentsComponent,
    AddGradeComponent,
    StudentDetailComponent,
    ProfileComponent,
    ProfessorProfileComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
