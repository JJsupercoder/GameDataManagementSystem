import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-module/login/login.component';
import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { AddComponent } from './add-module/add/add.component';
import { ListComponent } from './list-module/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './services/json-service.service';
//import { NotfoundComponent } from './src/app/notfound-module/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [JsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
