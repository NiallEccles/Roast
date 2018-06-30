import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public foodAdded = new Subject<any>();

  constructor() { }

  getFoodAdded(food) {
    return food;
  }
}
