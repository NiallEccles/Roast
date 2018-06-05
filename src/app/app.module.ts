import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './ui/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './view/menu/menu.component';
import { FullComponent } from './view/menu/full/full.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/basket.reducer';
import { BasketComponent } from './ui/basket/basket.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu/full', component: FullComponent },
  { path: 'basket', component: BasketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MenuComponent,
    FullComponent,
    BasketComponent
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

