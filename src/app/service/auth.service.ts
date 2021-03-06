
import { Router } from '@angular/router';
import { User } from './../login/data-user/user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  resultError: EventEmitter<Boolean> = new EventEmitter()

  public userAuthenticated: boolean = false;


  constructor(
    private router: Router
    
  ) { }

  login(user: User) {

    if (user.email === 'user@email.com' &&
      user.password === '123456') {

      this.userAuthenticated = true;
      this.router.navigate(['/home'])

    }

    else {
      this.userAuthenticated = false;
     // window.location.reload()
      this.resultError.emit(true)
    
     
    }
  }
}
