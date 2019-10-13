import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    // angular modules
    CommonModule,
    FormsModule,  // template forms

    // 3rd party components
    RouterModule  // ability to route
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,

    // 3rd party components
    RouterModule
  ]
})
export class SharedModule { }
