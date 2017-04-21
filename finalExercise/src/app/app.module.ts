import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MypostComponent } from './mypost/mypost.component';
import { MypipePipe } from './mypipe.pipe';
import { MyHttpService} from './my-http.service';

@NgModule({
  declarations: [
    AppComponent,
    MypostComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
