import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../../services/json.service';
import { Store } from '@ngrx/store';
import { BasketState } from '../../store/app.state';
import { Basket } from '../../store/models/basket.model';
import * as BasketActions from '../../store/actions/basket.actions';
import { NotificationService } from '../../services/notification/notification.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public fooddata: any;
  public urlparam: any;
  public urlfood: any;


  constructor(private route: ActivatedRoute, private jsonService: JsonService, private store: Store<BasketState>, private notification: NotificationService, private authService: AuthService) {
    this.route.params.subscribe( params => this.urlparam = params );
    this.urlfood = this.urlparam.id.replace(/_/g, ' ');
   }

  ngOnInit() {
    this.jsonService.getJSON().subscribe(data => {
      this.fooddata = data[this.urlparam.id];
      console.log(this.fooddata);
    });
  }

  getMenuItem(item){
    if(this.authService.isAuth()){
      this.store.dispatch(new BasketActions.AddBasket({item: item.title, price: item.price}));
      this.notification.foodAdded.next('Added ' + item.title);
    }
    else{
      this.notification.foodAdded.next('Login or Signup to add to your basket.');
    }
  }

}
