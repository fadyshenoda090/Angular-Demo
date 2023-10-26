import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:boolean=true;
  constructor(private userAuth:UserAuthService){}
logInFunction(){
this.userAuth.logIn("kak@syah.com","123456");
// this.user=this.userAuth.userLoggedIn;
}
logOutFunction(){
this.userAuth.logOut();
// this.user=this.userAuth.userLoggedIn;
}
ngOnInit():void{
// this.user=this.userAuth.userLoggedIn;
this.userAuth.userState().subscribe(
  {
    next:value=>{
      this.user=value;
    },
    error:err=>{
      alert('something went wrong '+err.message);
    }
  }
)
}
}
