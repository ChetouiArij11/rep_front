import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent} from './updateprofile/updateprofile.component';
import { PatientResolver } from './resolvers/patient.resolver';
import { AuthGuard } from './guards/auth.guard';
import { DemaqndemedecinComponent } from './demaqndemedecin/demaqndemedecin.component';
import { DemandeComponent } from './demande/demande.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { ProfilemedecinComponent } from './profilemedecin/profilemedecin.component';




const routes: Routes = [
  {path: '', component: AcceuilComponent, pathMatch:'full'},
{path: 'acc', component: AcceuilComponent},
{path:'login',component:LoginComponent},
{path:'createcompte',component:CreatecompteComponent},
{path:'prendre-rendezvous',component:PrendrerendezvousComponent},
{path:'listemedecin',component:ListemedecinComponent},
//{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], resolve: { patient: PatientResolver } },
//{path:'profile/updateprofile',component:UpdateprofileComponent},

{ path: 'update-profile/:id', component: UpdateProfileComponent },
{ path: 'profile', component: ProfileComponent},
{ path: 'docdemande', component: DemaqndemedecinComponent},
{ path: 'demande', component: DemandeComponent},
{ path: 'loginmedecin', component: LoginmedecinComponent},
{ path: 'profilemedecin', component: ProfilemedecinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
