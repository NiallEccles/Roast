import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-sliderloader',
  templateUrl: './sliderloader.component.html',
  styleUrls: ['./sliderloader.component.css']
})
export class SliderloaderComponent implements OnInit {

  public slides: any;

  constructor(jsonService: JsonService) {

    jsonService.getSlides().subscribe(data => {
      this.slides = data;
      console.log(this.slides);
    });
   }

  ngOnInit() {
  }

}
