import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientResolver } from './resolvers/patient.resolver';
import { RendezvousListComponent } from './rendezvous-list/rendezvous-list.component';
import { DemaqndemedecinComponent } from './demaqndemedecin/demaqndemedecin.component';
import { DemandeComponent } from './demande/demande.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { ProfilemedecinComponent } from './profilemedecin/profilemedecin.component';
import { NavbarmedecinComponent } from './navbarmedecin/navbarmedecin.component';
import { InterfacemedecinComponent } from './interfacemedecin/interfacemedecin.component';
import { AccmedecinComponent } from './accmedecin/accmedecin.component';
import { AjoutficheComponent } from './ajoutfiche/ajoutfiche.component';
import { DejapatientComponent } from './dejapatient/dejapatient.component';
import { ListeficheComponent } from './listefiche/listefiche.component';
import { InboxrendezvousComponent } from './inboxrendezvous/inboxrendezvous.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { QuisommeComponent } from './quisomme/quisomme.component';
import { CalenderComponent } from './calender/calender.component';



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
    ProfilemedecinComponent,
    NavbarmedecinComponent,
    InterfacemedecinComponent,
    AccmedecinComponent,
    AjoutficheComponent,
    DejapatientComponent,
    ListeficheComponent,
    InboxrendezvousComponent,
    SearchResultsComponent,
    QuisommeComponent,
    CalenderComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    CalendarModule
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
