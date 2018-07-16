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
  test: boolean;

  constructor(private authService: AuthService, private theme: ThemeService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  checkClicked(val){
    if(val){
      this.test = false;
      this.theme.theme.next('light');
    } else{
      this.test = true;
      this.theme.theme.next('dark');
    }
}

}
