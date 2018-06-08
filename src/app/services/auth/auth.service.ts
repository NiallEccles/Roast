import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private roastauth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
      this.roastauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
          console.log(result);
          this.authSuccessfully();
      })
      .catch(error => {
          console.log(error);
      });
  }
  login(authData: AuthData) {
    this.roastauth.auth.signInWithEmailAndPassword(authData.email.toString(), authData.password)
    .then(result => {
        console.log(result);
        this.authSuccessfully();
    })
    .catch(error => {
        console.log(error);
    });
  }

  logout() {
      this.isAuthenticated = false;
      this.authChange.next(false);
      this.router.navigate(['/logout']);
  }

  isAuth() {
      return this.isAuthenticated;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/menu/full']);
  }
}
