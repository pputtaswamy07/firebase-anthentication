import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: 'login', component: LogicComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
