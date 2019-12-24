import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LazyRoutingModule } from './lazy.routing';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    FormsModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
