import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesService } from './heroes.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testData';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, InMemoryWebApiModule.forRoot(TestData)],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
