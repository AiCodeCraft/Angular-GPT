
import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

interface AIModel {
  id: string;
  name: string;
}

@Component({
  selector: 'app-model-selector',
  templateUrl: './model-selector.component.html',
  styleUrls: ['./model-selector.component.css']
})
export class ModelSelectorComponent {
  availableModels: AIModel[] = [
    { id: 'model-a', name: 'Modell A' },
    { id: 'model-b', name: 'Modell B' },
    { id: 'model-c', name: 'Modell C' }
  ];
  selectedModel: string = this.availableModels[0].id;

  constructor(private chatService: ChatService) {}

  useSelectedModel() {
    this.chatService.setActiveModel(this.selectedModel);
  }
}
