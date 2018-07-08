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
      if (localStorage.getItem('slides') === null) {
        localStorage.setItem('slides', JSON.stringify(data));
        this.slides = JSON.parse(localStorage.getItem('slides'));
        localStorage.setItem('storeTime', new Date().getHours().toString());
      }
      else{
        if(Number(localStorage.getItem('storeTime')) < new Date().getHours()){
          localStorage.setItem('slides', JSON.stringify(data));
          this.slides = JSON.parse(localStorage.getItem('slides'));
          localStorage.setItem('storeTime', new Date().getHours().toString());
        }
        else{
          this.slides = JSON.parse(localStorage.getItem('slides'));
        }
      }
      console.log(this.slides);
    });
   }

  ngOnInit() {
  }

}
