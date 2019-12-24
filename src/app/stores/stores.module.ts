import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './postState/post.state';
import { MessageState } from './messageState/message.state';
import { StringState } from './stringState/string.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      PostState,
      MessageState,
      StringState
    ])
  ],
  exports: [
    NgxsModule
  ]
})
export class StoresModule { }
