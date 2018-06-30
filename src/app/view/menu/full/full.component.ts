import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { JsonService } from '../../../services/json.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { BasketState } from '../../../store/app.state';
import { Basket } from '../../../store/models/basket.model'
import * as BasketActions from '../../../store/actions/basket.actions';
import { NotificationService } from '../../../services/notification/notification.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css'],
  animations: [
    trigger('goals',[
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ])
        )]), {optional: true})
      ])
    ])
  ]
})
export class FullComponent implements OnInit {
  constructor(private http: HttpClient, private jsonService: JsonService, private store: Store<BasketState>, private notification: NotificationService) {}

  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];

  public fooddata:any;

  getMenuItem(item){
    this.store.dispatch(new BasketActions.AddBasket({item: item.title, price: item.price}));
    this.notification.foodAdded.next(item.title);
  }

  ngOnInit() {}

  ngAfterContentInit(){
    this.jsonService.getJSON().subscribe(data => {
      this.fooddata = data;
      console.log(this.fooddata);
    });
  }
}
