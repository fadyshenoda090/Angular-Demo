import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-suesr-auth',
  templateUrl: './suesr-auth.component.html',
  styleUrls: ['./suesr-auth.component.css']
})
export class SuesrAuthComponent implements OnInit {
  user:boolean=true;
  constructor(private userAuth:UserAuthService){}
logInFunction(){
this.userAuth.logIn("kak@syah.com","123456");
this.user=this.userAuth.userLoggedIn;
}
logOutFunction(){
this.userAuth.logOut();
this.user=this.userAuth.userLoggedIn;
}
ngOnInit():void{
this.user=this.userAuth.userLoggedIn;
}
}
