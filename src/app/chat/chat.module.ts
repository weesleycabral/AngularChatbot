import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { NbLayoutModule, NbThemeModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MaterialModule } from '../core/material.module'
import { MarkdownService } from './markdown.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbChatModule,
    // NbSpinnerModule
  ],
  exports: [
    ChatDialogComponent
  ],
  providers: [
    ChatService,
    MarkdownService
  ]
})
export class ChatModule { }
