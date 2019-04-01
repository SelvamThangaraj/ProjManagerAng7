import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PmaddtaskComponent } from './pmaddtask/pmaddtask.component';
import {PmviewtaskComponent} from './pmviewtask/pmviewtask.component';
import {AppComponent} from './app.component';
import {PmadduserComponent} from './pmadduser/pmadduser.component';
import {PmaddprjComponent} from './pmaddprj/pmaddprj.component';


const routes: Routes = [
 { path: 'pmaddtask', component: PmaddtaskComponent},
 { path: 'pmviewtask', component: PmviewtaskComponent},
 { path: 'pmadduser', component: PmadduserComponent},
 { path: 'pmaddprj', component: PmaddprjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
