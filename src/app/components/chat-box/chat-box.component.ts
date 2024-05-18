import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  inputMessage: string = '';
  messages: any[] = [];

  constructor(private chatService: ChatService) {
    this.messages = this.chatService.getMessages();
  }

  sendMessage() {
    if (this.inputMessage.trim() !== '') {
      this.chatService.sendMessage(this.inputMessage);
      this.inputMessage = '';
    }
  }
}
