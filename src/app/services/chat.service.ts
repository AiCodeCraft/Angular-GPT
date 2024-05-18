import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: any[] = [];
  activeModel: string = 'model-a';

  constructor(private apiService: ApiService) {}

  setActiveModel(modelId: string) {
    this.activeModel = modelId;
  }

  sendMessage(message: string) {
    // Sende Nachricht an die KI-API unter Verwendung des aktiven Modells
    this.apiService.sendMessageToApi(message, this.activeModel).subscribe(
      (response) => {
        this.messages.push({ sender: 'user', text: message });
        this.messages.push({ sender: 'assistant', text: response.text });
      },
      (error) => {
        console.error('Fehler beim Senden der Nachricht:', error);
      }
    );
  }

  getMessages() {
    return this.messages;
  }
}
