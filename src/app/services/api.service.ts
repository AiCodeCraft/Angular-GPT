import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private apiKey: string | null = null;

  constructor(private http: HttpClient) {
    // Versuchen, den API-Schlüssel aus dem LocalStorage zu laden
    this.apiKey = localStorage.getItem('apiKey');
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    // Speichern des API-Schlüssels im LocalStorage
    localStorage.setItem('apiKey', apiKey);
  }

  getApiKey() {
    return this.apiKey;
  }

  sendMessageToApi(message: string) {
    if (!this.apiKey) {
      throw new Error('Kein API-Schlüssel gesetzt');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      prompt: message,
      max_tokens: 2048,
      n: 1,
      stop: null,
      temperature: 0.7
    };

    return this.http.post<any>(`${this.apiUrl}/completions`, body, { headers });
  }
}
