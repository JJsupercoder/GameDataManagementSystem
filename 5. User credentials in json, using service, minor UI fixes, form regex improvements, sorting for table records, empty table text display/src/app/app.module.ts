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
import { NotfoundComponent } from './notfound-module/notfound/notfound.component';
import { JsonIdHandlingService } from './services/json-id-handling.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './Components/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserCredentials } from './models/user-credentials';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    ListComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    PopupComponent,
  ],
  exports: [FormsModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  providers: [JsonService, JsonIdHandlingService, UserCredentials],
  bootstrap: [AppComponent],
})
export class AppModule {}
