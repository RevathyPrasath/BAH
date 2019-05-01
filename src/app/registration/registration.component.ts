import { Component, OnInit } from '@angular/core';
import { AgreeComponent } from '../agree/agree.component';
//import { EqualValidatorDirective } from '../equal-validator.directive';
import { UpperCasePipe } from '@angular/common';
import { AppendPipe } from '../shared/pipes/append.pipe';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
 // directives: [EqualValidatorDirective]
})
export class RegistrationComponent implements OnInit {
  userfNm : String;
  userlNm : String;
 pgName : String;
  passwd:String;
  pemail:String;
  addl1:String;
  addl2:String;
  citynm:String;
  statenm:String;
  pincodenum:number;
  countrynm:String;
  Phonenum:number;
  parPhonenum:number;
  confirmPass:String;
  comfirmEmail:String;
  guardianName:String;
  guardianphone:number;
  gaddl1:String;
  gaddl2:String;
  gcitynm:String;
  gstatenm:String;
  gpincodenum:number;
  gcountrynm:String;
  useremail:String;
  constructor() {
    
  }

  ngOnInit() {
  }
  fun(){
    let name = new AppendPipe().transform(this.userfNm);
    alert("Hello " +name +" your account created successfully");
  
  }

}
;