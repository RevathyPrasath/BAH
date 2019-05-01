import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//   constructor(private dialogService:DialogService) {}
//   showConfirm() {
//       let disposable = this.dialogService.addDialog(LoginComponent)
//       //We can close dialog calling disposable.unsubscribe();
//       //If dialog was not closed manually close it by timeout
//       // setTimeout(()=>{
//       //     disposable.unsubscribe();
//       // },10000);
//   }
  ngOnInit() {
  }

}
