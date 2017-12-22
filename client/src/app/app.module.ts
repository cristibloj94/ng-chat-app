import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { MEAN2RoutingModule } from './app-routing.module';
import { AlertComponent } from './directives/index';
import { RoomComponent } from "./home/room/room.component";
import {RoomListComponent} from "./home/rooms-list/room-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    RoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MEAN2RoutingModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
