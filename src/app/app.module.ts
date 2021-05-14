import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FeuilleDeTempsComponent } from './feuille-de-temps/feuille-de-temps.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FeuilleDeActiviteComponent } from './feuille-de-activite/feuille-de-activite.component';
import { ProfilComponent } from './profil/profil.component';
import { CreationComponent } from './creation/creation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    FeuilleDeTempsComponent,
    LoginPageComponent,
    FeuilleDeActiviteComponent,
    ProfilComponent,
    CreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
