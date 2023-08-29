import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './slytherin/slytherin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
