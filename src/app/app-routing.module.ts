import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/student-components/profile/profile.component';
import { ProfessorProfileComponent } from './components/professor-components/professor-profile/professor-profile.component';
import { AdminProfileComponent } from './components/admin-components/admin-profile/admin-profile.component';
import { MakePaymentComponent } from './components/student-components/make-payment/make-payment.component';
import { GenerateReportCardComponent } from './components/student-components/generate-report-card/generate-report-card.component';

const routes: Routes = [
  { path: 'student-detail/:userEmail', component: StudentDetailComponent },
  { path: 'add-grade/:studentId/:courseId', component: AddGradeComponent},
  { path: 'enrolled-students/:professorId/:courseId', component: EnrolledStudentsComponent},
  { path: 'register-course/:studentId/:courseId', component: RegisterCourseComponent},
  { path: 'student-dashboard', component: StudentPortalComponent},
  { path: 'professor-dashboard', component: ProfessorPortalComponent},
  { path: 'admin-dashboard', component: AdminPortalComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'professors', component: ProfessorsComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'professor-profile', component: ProfessorProfileComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'make-payment/:studentId/:paymentId/:amount', component: MakePaymentComponent },
  { path: 'generate-report-card', component: GenerateReportCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
