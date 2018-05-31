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

  ngOnInit() {
    this.jsonService.getJSON().subscribe(data => {
    });
  }

  getData() {
    // this.http.get('http://www.recipepuppy.com/api/?i=bacon,garlic&q=omelet&p=3')
    //   .subscribe(
    //     (data: any[]) => {
    //       console.log(data);
    //     }
    //   );
    // console.log(this.data);
  }
}
