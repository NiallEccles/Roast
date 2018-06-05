import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import * as BasketActions from '../../store/actions/basket.actions'
import { Basket } from '../../store/models/basket.model';
import { BasketState } from '../../store/app.state'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Observable<Basket[]>;

  constructor(private store: Store<BasketState>) { 
    this.basket = store.select('basket');
   }

   removeBasketItem(index){
      this.store.dispatch(new BasketActions.RemoveBasket(index));
   }

  ngOnInit() {
  }

}
