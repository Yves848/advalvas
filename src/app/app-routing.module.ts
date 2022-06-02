import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CalenComponent } from './components/calendar/calendar.component';
import { ListeComponent } from './components/liste/liste.component';
import { AddmealComponent } from './components/addmeal/addmeal.component';
import { FlextestComponent } from './components/flextest/flextest.component';
import { CategoryComponent } from './ads/components/categories/categories.component';
import { IndexComponent } from './ads/components/index/index.component';
import { MainadsComponent } from './ads/components/mainads/mainads.component';
import { NewadComponent } from './ads/components/newad/newad.component';
import { PoidsComponent } from './components/poids/poids.component';






const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories2', component: MainadsComponent },
  { path: 'calendar', component: CalenComponent },
  { path: 'list', component: ListeComponent },
  { path: 'addmeal', component: AddmealComponent },
  { path: 'test', component: NewadComponent },
  { path: 'poids', component: PoidsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
