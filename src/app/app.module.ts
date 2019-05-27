import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Glam1Component } from './glam1/glam1.component';
import { Glam2Component } from './glam2/glam2.component';
import { Glam3Component } from './glam3/glam3.component';
import { Glam4Component } from './glam4/glam4.component';
import { Glam5Component } from './glam5/glam5.component';
import { Glam6Component } from './glam6/glam6.component';

import { from } from 'rxjs';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    Glam1Component,
    Glam2Component,
    Glam3Component,
    Glam4Component,
    Glam5Component,
    Glam6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
