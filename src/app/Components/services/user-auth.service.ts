import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  userLogBehavior: BehaviorSubject<boolean>

  constructor() { 
    this.userLogBehavior = new BehaviorSubject<boolean>(this.userLoggedIn);
  }
  logIn(email: string, password: string){
    let token="123456789";
    localStorage.setItem('access token',token);
    this.userLogBehavior.next(true);
  }
  logOut(){
    localStorage.removeItem('access token');
    this.userLogBehavior.next(false);
  }  
  get userLoggedIn():boolean{
    return (localStorage.getItem('access token'))?true:false;
  }
  userState():Observable<boolean>{
    return this.userLogBehavior.asObservable();
  }
}
