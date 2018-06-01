import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonService } from '../../../services/json.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  constructor(private http: HttpClient, private jsonService: JsonService) {}

  public fooddata:any;

  ngOnInit() {}

  ngAfterContentInit(){
    this.jsonService.getJSON().subscribe(data => {
      this.fooddata = data;
      console.log(this.fooddata);
    });
  }
}
