import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CalenComponent } from './components/calendar/calendar.component';
import { ListeComponent } from './components/liste/liste.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'calendar', component: CalenComponent},
  {path: 'list', component: ListeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
