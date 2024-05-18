
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-settings',
  templateUrl: './api-settings.component.html',
  styleUrls: ['./api-settings.component.css']
})
export class ApiSettingsComponent {
  apiKey: string = '';

  constructor(private apiService: ApiService) {}

  saveApiKey() {
    this.apiService.setApiKey(this.apiKey);
    // Speichern Sie den API-Schlüssel z.B. in LocalStorage
    localStorage.setItem('apiKey', this.apiKey);
  }
}
