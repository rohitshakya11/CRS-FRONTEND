import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

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
  { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'professor-profile', component: ProfessorProfileComponent },
  { path: 'admin-profile', component: AdminProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
