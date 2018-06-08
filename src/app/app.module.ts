import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './view/menu/menu.component';
import { FullComponent } from './view/menu/full/full.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/basket.reducer';
import { BasketComponent } from './ui/basket/basket.component';
import { AccountComponent } from './view/account/account.component';
import { SignupComponent } from './view/account/signup/signup.component';
import { LoginComponent } from './view/account/login/login.component';
import { AuthService } from './services/auth/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu/full', component: FullComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/signup', component: SignupComponent },
  { path: 'account/login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MenuComponent,
    FullComponent,
    BasketComponent,
    AccountComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      basket: reducer
    }),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

