import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from 'src/app/Guards/user.guard';

const routes:Routes=[
  {path:'login',component:LoginComponent,title: 'Login',canActivate:[userGuard]},
  {path:'viewProfile',component:ViewProfileComponent,title: 'View Profile',canActivate:[userGuard]},
  {path:'editProfile',component:EditProfileComponent,title: 'Edit Profile',canActivate:[userGuard]}
]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
