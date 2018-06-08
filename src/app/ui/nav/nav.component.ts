import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '.nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  authSubscription: Subscription;
  constructor(private authService: AuthService) {}
  public navOpen = false;

  public icon = 'menu';

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  toggleNav() {
    if (this.navOpen === false) {
      this.navOpen = true;
      this.icon = 'close';
    } else {
      this.navOpen = false;
      this.icon = 'menu';
    }
  }

}
