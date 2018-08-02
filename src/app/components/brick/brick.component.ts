import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.css']
})
export class BrickComponent implements OnInit {

  @Input() brickContent: string;
  @Input() brickButtonText: string;

  constructor() { }

  ngOnInit() {
  }

}
