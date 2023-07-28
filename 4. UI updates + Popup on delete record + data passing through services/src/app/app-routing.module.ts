import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-module/login/login.component';
import { NotfoundComponent } from './notfound-module/notfound/notfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-module/dashboard-module.module').then(
        (m) => m.DashboardModuleModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./add-module/add-module.module').then((m) => m.AddModuleModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./list-module/list-module.module').then(
        (m) => m.ListModuleModule
      ),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
