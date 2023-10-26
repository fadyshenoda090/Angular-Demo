import { Component } from '@angular/core';
import { UsersService } from 'src/app/Components/services/users.service';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/modeles/iuser';

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})
export class UserTemplateDrivenFormComponent {
  user:Iuser={} as Iuser;
  addAnotherPhoneNumber:boolean=false;
  additionalPhoneNumber: string = '';
constructor(private userService:UsersService,private router:Router){}
addAnotherPhone(){
  this.addAnotherPhoneNumber=!this.addAnotherPhoneNumber;
}
addNewUser(){
  if (this.additionalPhoneNumber) {
    this.user.additionalPhoneNumber = this.additionalPhoneNumber;
  }
  this.userService.signUpUser(this.user).subscribe({
    next:()=>{
      alert('User Added Successfully');
      this.router.navigate(['/Products']);
    },
    error:(err)=>{
      alert('Error Occured');
      console.log(err);
    }
  })
}
}
