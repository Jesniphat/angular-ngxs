import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components.routing';
import { NewComponent } from './new/new.component';
import { MoreComponent } from './more/more.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewComponent, MoreComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
