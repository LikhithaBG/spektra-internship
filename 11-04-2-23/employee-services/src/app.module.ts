import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdComponent } from './prod/prod.component';
import { ProsService } from './pros.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProsService],
  bootstrap: [ProdComponent]
})
export class AppModule { }
