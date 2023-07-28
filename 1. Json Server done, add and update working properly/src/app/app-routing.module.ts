import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddComponent } from './Components/add/add.component';
import { ListComponent } from './Components/list/list.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  //{path:'', redirectTo: '/login'},
  {path:'dashboard', component: DashboardComponent},
  {path:'add', component: AddComponent},
  {path:'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
