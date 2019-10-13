import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, // angular common classes
    SharedModule, // shared stuff

    BrowserModule, // browser suport
    BrowserAnimationsModule, // animations
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    })  // notifications
  ]
})
export class CoreModule {}
