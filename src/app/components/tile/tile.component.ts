import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tileTitle: string;
  @Input() tileDescription: string;
  @Input() tileButtonText: string;

  constructor() { }

  ngOnInit() {
  }

}
