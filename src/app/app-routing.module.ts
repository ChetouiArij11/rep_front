import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';


const routes: Routes = [
{path:'connect',component:LoginComponent},
{path:'test',component:CreatecompteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
