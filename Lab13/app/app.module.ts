import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { myRoutes } from "./app.routes";
import { DbService } from "./db.service";

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService,MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
