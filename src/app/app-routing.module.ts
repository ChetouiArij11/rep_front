import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
{path: '', component: AcceuilComponent, pathMatch:'full'},
{path:'connect',component:LoginComponent},
{path:'createcompte',component:CreatecompteComponent},
{path:'prendrerendezouvs',component:PrendrerendezvousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
