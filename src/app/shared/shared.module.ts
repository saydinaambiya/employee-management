import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    ValidationMessageComponent,
    NotFoundComponent
  ],
  exports: [
    ValidationMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
