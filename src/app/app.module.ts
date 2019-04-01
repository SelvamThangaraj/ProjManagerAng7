import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmviewtaskComponent } from './pmviewtask/pmviewtask.component';
import { PmaddtaskComponent } from './pmaddtask/pmaddtask.component';
import { PmadduserComponent } from './pmadduser/pmadduser.component';
import { PmaddprjComponent } from './pmaddprj/pmaddprj.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilteruserPipe } from './pmadduser/filteruser.pipe';
import {UserService} from './pmadduser/user.service';


@NgModule({
  declarations: [
    AppComponent,
    PmviewtaskComponent,
    PmaddtaskComponent,
    PmadduserComponent,
    FilteruserPipe,
    PmaddprjComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
