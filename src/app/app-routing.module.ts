import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { PatientResolver } from './resolvers/patient.resolver';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
{path: 'acc', component: AcceuilComponent},
{path:'login',component:LoginComponent},
{path:'createcompte',component:CreatecompteComponent},
{path:'prendre-rendezvous',component:PrendrerendezvousComponent},
{path:'listemedecin',component:ListemedecinComponent},
{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], resolve: { patient: PatientResolver } },
{path:'profile/updateprofile',component:UpdateprofileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
