import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';

@NgModule({
  declarations: [ZeroPaddingPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
