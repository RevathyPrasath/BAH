import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
user:any[];
showReview=false;
  constructor(private _http: Http) { 
  
  }

  ngOnInit() {
    var url = 'assets/data.json';

    return this._http.get(url).map((response: Response) => response.json())
      .subscribe(data => {
        console.log(data);
  this.user=data;
  this.showReview=true;

      });
  
  }


}


