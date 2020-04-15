import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
// import { ChatModule } from './chat/ChatModule';
// import { NbLayoutModule, NbThemeModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MdToHtmlPipe } from './shared/md-to-html.pipe';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
import { ChatModule } from './chat/chat.module';
import { MaterialModule } from './core/material.module';


@NgModule({
  declarations: [
    AppComponent,
    // MdToHtmlPipe
  ],
  imports: [
    ChatModule,
    MaterialModule,
    BrowserModule,
    ChatModule,
    BrowserAnimationsModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
    // NbChatModule,
    // NbSpinnerModule,
    // NoopAnimationsModule
    // MatInputModule,
    // MatButtonModule,
    // MatTooltipModule,
    // MatFormFieldModule,
    // MatToolbarModule,
    // MatIconModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
