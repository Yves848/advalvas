import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeComponentsModule } from '../app/primeComponents'

import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { CategoriesComponent } from './components/categories/categories.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CategorydetailComponent } from './component/categorydetail/categorydetail.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddmealComponent } from './components/addmeal/addmeal.component'; // a plugin


const firebaseConfig = {
  apiKey: "AIzaSyCStfnn7PHRt3I_fynHGoKMtucbqcLFNT8",
  authDomain: "advalvas-4ddf0.firebaseapp.com",
  projectId: "advalvas-4ddf0",
  storageBucket: "advalvas-4ddf0.appspot.com",
  messagingSenderId: "604799176014",
  databaseURL: "https://advalvas-4ddf0-default-rtdb.europe-west1.firebasedatabase.app",
  appId: "1:604799176014:web:63f8b3a6b4fa4aad87a21f"
};

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    SigninComponent,
    CategoriesComponent,
    ToolbarComponent,
    CategorydetailComponent,
    CategorydetailComponent,
    CalendarComponent,
    AddmealComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
