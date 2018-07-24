import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'

import { NgModule } from "@angular/core";
import { LocalComponent } from './local/local.component';
const routes: Routes =[
    {path: '', redirectTo: '/localComponent', pathMatch: 'full'},
    {path: 'appComponent', component:AppComponent},
    {path: 'localComponent', component:LocalComponent},
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule{ }

