import { AuthGuard } from './guards/auth.guard';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './components/admin-components/courses/courses.component';
import { CourseDetailComponent } from './components/admin-components/course-detail/course-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseSearchComponent } from './components/admin-components/course-search/course-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/admin-components/students/students.component';
import { ProfessorsComponent } from './components/admin-components/professors/professors.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { StudentPortalComponent } from './components/student-components/student-portal/student-portal.component';
import { ProfessorPortalComponent } from './components/professor-components/professor-portal/professor-portal.component';
import { AdminPortalComponent } from './components/admin-components/admin-portal/admin-portal.component';
import { RegisterCourseComponent } from './components/student-components/register-course/register-course.component';
import { EnrolledStudentsComponent } from './components/professor-components/enrolled-students/enrolled-students.component';
import { AddGradeComponent } from './components/professor-components/add-grade/add-grade.component';
import { StudentDetailComponent } from './components/admin-components/student-detail/student-detail.component';
import { ProfileComponent } from './components/student-components/profile/profile.component';
import { ProfessorProfileComponent } from './components/professor-components/professor-profile/professor-profile.component';
import { AdminProfileComponent } from './components/admin-components/admin-profile/admin-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { MakePaymentComponent } from './components/student-components/make-payment/make-payment.component';
import { GenerateReportCardComponent } from './components/student-components/generate-report-card/generate-report-card.component';

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
    AdminProfileComponent,
    FooterComponent,
    MakePaymentComponent,
    GenerateReportCardComponent
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
