import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickButtonComponent } from './click-button/click-button.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { SaveName } from './save/saveName';

@NgModule({
  declarations: [
    AppComponent,
    ClickButtonComponent,
    AnotherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SaveName],
  bootstrap: [AppComponent]
})
export class AppModule { }
