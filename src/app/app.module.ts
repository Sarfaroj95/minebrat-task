import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module"
import {
  HttpClientModule, HTTP_INTERCEPTORS
} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ng6-toastr-notifications";
import { AuthService } from "./service/service.service"


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CitiesListComponent } from './list/cities-list/cities-list.component';
import { ResultListComponent } from './result-list/result-list.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CitiesListComponent,
    ResultListComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot()


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
