import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public theme = new Subject<any>();

  constructor() { }

  getTheme(theme) {
    return this.theme;
  }
}
