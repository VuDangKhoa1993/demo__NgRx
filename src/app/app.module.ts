import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.state';
import { HomeComponent } from './home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
   // FormsModule, // remove these things because they have already decleared in the lazy-module. 
    // ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
