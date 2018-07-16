import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription, Subject } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: '.nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  authSubscription: Subscription;

  public navOpen = false;

  public icon = 'menu';
  public showNotification = false;
  public foodAdded;
  private navTheme: string;

  constructor(private authService: AuthService, private notification: NotificationService, private theme: ThemeService) {
    this.notification.foodAdded.subscribe(e => {
      this.foodAdded = e;
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
        this.foodAdded = null;
      }, 2000);
     });
     this.theme.theme.subscribe(e => {
      this.navTheme = e;
     });
  }

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

  hasNotification() {
    this.showNotification = true;
  }

}
