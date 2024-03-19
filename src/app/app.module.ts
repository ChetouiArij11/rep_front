import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreatecompteComponent } from './createcompte/createcompte.component';
import { PatientsService } from './services/patients.service';
import { ProfileComponent } from './profile/profile.component';
import { PrendrerendezvousComponent } from './prendrerendezvous/prendrerendezvous.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListemedecinComponent } from './listemedecin/listemedecin.component';
import { CardmedecinComponent } from './cardmedecin/cardmedecin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    CreatecompteComponent,
    ProfileComponent,
    PrendrerendezvousComponent,
    SearchbarComponent,
    FooterComponent,
    ListemedecinComponent,
    CardmedecinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    PatientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
