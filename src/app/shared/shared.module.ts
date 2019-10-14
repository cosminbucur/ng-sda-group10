import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    // angular modules
    CommonModule,
    FormsModule,  // template forms
    ReactiveFormsModule, // reactive forms

    // 3rd party components
    RouterModule,  // ability to route
    MaterialModule
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party components
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
