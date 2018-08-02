import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isAuth: boolean;
  authSubscription: Subscription;
  themeColour: string = 'light';
  checked: boolean;

  constructor(private authService: AuthService, private theme: ThemeService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.checkThemePreference();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  checkThemePreference(){
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme', this.themeColour);
      this.checked = false;
    }
    else{
      this.themeColour = localStorage.getItem('theme');
      if(localStorage.getItem('theme') === 'light'){
        this.checked = false;
      }
      else{
        this.checked = true;
      }
    }
  }

  checkClicked(val){
    if(val){
      this.checked = false;
      this.theme.theme.next('light');
      localStorage.setItem('theme', 'light');
    } else{
      this.checked = true;
      this.theme.theme.next('dark');
      localStorage.setItem('theme', 'dark');
    }
}

}
