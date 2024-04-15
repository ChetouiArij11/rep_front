import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PatientsService } from './services/patients.service';
import { ProfileComponent } from './profile/profile.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { CardmedecinComponent } from './cardmedecin/cardmedecin.component';
import { UpdateProfileComponent } from './updateprofile/updateprofile.component';
import { initializeApp } from './app.initializers';
import { AuthGuard } from './guards/auth.guard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientResolver } from './resolvers/patient.resolver';
import { RendezvousListComponent } from './rendezvous-list/rendezvous-list.component';
import { DemaqndemedecinComponent } from './demaqndemedecin/demaqndemedecin.component';
import { DemandeComponent } from './demande/demande.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    NavbarComponent,

    LoginComponent,
    CreatecompteComponent,
    ProfileComponent,
    PrendrerendezvousComponent,
    SearchbarComponent,
    FooterComponent,
    ListemedecinComponent,
    CardmedecinComponent,
    UpdateProfileComponent,
    RendezvousListComponent,
    DemaqndemedecinComponent,
    DemandeComponent,
    LoginmedecinComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    PatientsService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [PatientsService], multi: true },
    AuthGuard,
    PatientResolver

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
