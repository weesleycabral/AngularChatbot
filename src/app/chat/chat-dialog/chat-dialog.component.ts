import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { scan } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  // messages = [];
  formValue: string;
  loading = false;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    // this.addBotMessage('Human presence detected 🤖. How can I help you? ');
    this.messages = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  // handleUserMessage(event) {
  //   console.log(event);
  //   const text = event.message;
  //   this.addUserMessage(text);

  //   this.loading = true;

  //   // Make an HTTP Request
  //   this.http.post<any>(
  //     dialogflowURL,
  //     {
  //       sessionId: this.sessionId,
  //       queryInput: {
  //         // event: {
  //         //   name: 'USER_ONBOARDING',
  //         //   languageCode: 'en-US'
  //         // },
  //         text: {
  //           text,
  //           languageCode: 'en-US'
  //         }
  //       }
  //     }
  //   )
  //   .subscribe(res => {
  //     this.addBotMessage(res.fulfillmentText);
  //     this.loading = false;
  //   });
  // }


  // Helpers

  // addUserMessage(text) {
  //   this.messages.push({
  //     text,
  //     sender: 'You',
  //     reply: true,
  //     date: new Date()
  //   });
  // }

  // addBotMessage(text) {
  //   this.messages.push({
  //     text,
  //     sender: 'Bot',
  //     avatar: '/assets/bot.jpeg',
  //     date: new Date()
  //   });
  // }

}
