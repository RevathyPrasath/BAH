import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { MatDialog , MatButton } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialogService:DialogService) {}
  showConfirm() {
    let disposable = this.dialogService.addDialog(LoginComponent);
        // .subscribe((isConfirmed)=>{
        //     //We get dialog result
        //     if(isConfirmed) {
        //         alert('accepted');
        //     }
        // });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
}

 
}
