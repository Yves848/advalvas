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
import { CalenComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AddmealComponent } from './components/addmeal/addmeal.component';
import { ListeComponent } from './components/liste/liste.component';
import { FlextestComponent } from './components/flextest/flextest.component';
import { IndexComponent } from './ads/components/index/index.component'; // a plugin
import { CategoryComponent } from './ads/components/categories/categories.component';
import { MainadsComponent } from './ads/components/mainads/mainads.component';
import { CateglistComponent } from './ads/components/categlist/categlist.component';
import { NewadComponent } from './ads/components/newad/newad.component';
import { PoidsComponent } from './components/poids/poids.component';
import { AddWeightsComponent } from './components/add-weights/add-weights.component';
import { ChartComponent } from './components/chart/chart.component';


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
    CalenComponent,
    AddmealComponent,
    ListeComponent,
    FlextestComponent,
    IndexComponent,
    CategoryComponent,
    MainadsComponent,
    CateglistComponent,
    NewadComponent,
    PoidsComponent,
    AddWeightsComponent,
    ChartComponent
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
