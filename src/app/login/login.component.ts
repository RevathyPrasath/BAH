import { Component,OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
export interface ConfirmModel {
  userId:string;
  password:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel , OnInit {
  userId: string;
  password: string;
  log:any[];
  constructor(dialogService: DialogService,private _http: Http) {
    super(dialogService);
  }
  ngOnInit() {
    var url = 'assets/login.json';
    
        return this._http.get(url).map((response: Response) => response.json())
          .subscribe(data => {
         
      this.log=data;
       });
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
  //  alert(this.password);
  let us=this.userId;
  let pw=this.password;
  console.log(this.log);
  }

}


 /* constructor(public _matDialogRef: MatDialogRef<LoginComponent>) { }

  
  submit() {
    alert("Inside submit");
    this._matDialogRef.close('closed on submit');
  }
  cancel() {
    alert("Inside cancel");
    this._matDialogRef.close('closed on cancel'); 
  }*/

