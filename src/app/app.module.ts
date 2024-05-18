
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ApiSettingsComponent } from './components/api-settings/api-settings.component';
import { ModelSelectorComponent } from './components/model-selector/model-selector.component';

import { ChatService } from './services/chat.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ApiSettingsComponent,
    ModelSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChatService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
