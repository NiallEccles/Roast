import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login_error: Observable<string>;

  constructor(private authService: AuthService) { 
    this.authService.auth_error = this.login_error;
   }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.auth_error.subscribe( (e) => {
      console.log(e);
    });
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
