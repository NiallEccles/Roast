import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  constructor() {}
  public navOpen = false;

  public icon = 'menu';

  ngOnInit() {}

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
