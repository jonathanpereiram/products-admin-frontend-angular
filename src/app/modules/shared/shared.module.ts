import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForInRangeDirective } from './directives/for-in-range.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    ForInRangeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ForInRangeDirective
  ]
})
export class SharedModule { }
