import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Components/services/user-auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const userSevice=inject(UserAuthService);
  const router=inject(Router);
  if(userSevice.userLoggedIn){
    return true;
  }else{
    alert('you must be logged in first');
    router.navigate(['/userLogIn']);
    return false;
  }
};
