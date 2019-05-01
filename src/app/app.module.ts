import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
// import { MaterialModule }  from './material.module';
import { NgModule } from '@angular/core';
// import { MatDialogModule, MatCardModule , MatButtonModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';
import { CommonModule } from "@angular/common";

// import { BrowserModule } from '@angular/platform-browser';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Routes, RouterModule } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { RegistrationComponent } from './registration/registration.component';
import { AgreeComponent } from './agree/agree.component';
import { EqualValidator } from './shared/directives/equal.directive';
import { AppendPipe } from './shared/pipes/append.pipe';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistrationComponent},
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
 // { path: '', component: LoginComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ReviewComponent,
    RegistrationComponent,
    AgreeComponent,
    EqualValidator,
    AppendPipe
  ],
  imports: [BootstrapModalModule.forRoot({container:document.body}),
    BrowserModule ,
    BrowserAnimationsModule,
    HttpModule,
    NgxCarouselModule,
    Ng2CarouselamosModule,
    CarouselModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule ],
  providers: [],
  entryComponents:[LoginComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
