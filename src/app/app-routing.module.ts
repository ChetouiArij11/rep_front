import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';


const routes: Routes = [
  {path: 'acc', component: AcceuilComponent, pathMatch:'full'},
{path: 'acc', component: AcceuilComponent},
{path:'connect',component:LoginComponent},
{path:'createcompte',component:CreatecompteComponent},
{path:'prendre-rendezvous',component:PrendrerendezvousComponent},
{path:'listemedecin',component:ListemedecinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
