import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css']
})
export class AgreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
agree()
{
  var element = <HTMLInputElement> document.getElementById("cb");
  var isChecked = element.checked;
  if(isChecked){
    return true;   
  }
    console.log(isChecked);
}
}
