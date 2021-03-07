import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropRepasComponent } from './prop-repas/prop-repas.component';

@NgModule({
  declarations: [
    AppComponent,
    PropRepasComponent
  ],
  imports: [ 
    FormsModule ,
    HttpClientModule,
    BrowserModule
  ],
  providers: [ HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
