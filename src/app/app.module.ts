import {NgModule, Output} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmadoUnoComponent } from './crear-personaje/armado-ficha/armado-uno/armado-uno.component';
import { ArmadoDosComponent } from './crear-personaje/armado-ficha/armado-dos/armado-dos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HabilidadesSelectComponent } from './crear-personaje/armado-ficha/armado-uno/habilidades-select/habilidades-select.component';
import {FormsModule} from "@angular/forms";
import { SelectorMagiasComponent } from './crear-personaje/armado-ficha/armado-uno/magias-select/selector-magias.component';
import { EstadisticaArcanismoComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-arcanismo/estadistica-arcanismo.component';
import { EstadisticaVoluntadComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-voluntad/estadistica-voluntad.component';
import { EstadisticaAstuciaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-astucia/estadistica-astucia.component';
import { EstadisticaCarismaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-carisma/estadistica-carisma.component';
import { EstadisticaDestrezaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-destreza/estadistica-destreza.component';
import { EstadisticaFuerzaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-fuerza/estadistica-fuerza.component';
import { EstadisticaInteligenciaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-inteligencia/estadistica-inteligencia.component';
import { EstadisticaResistenciaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-resistencia/estadistica-resistencia.component';
import { EstadisticaSabiduriaComponent } from './crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-sabiduria/estadistica-sabiduria.component';
import { CrearPersonajeComponent } from './crear-personaje/crear-personaje.component';
import { RefactPruebaComponent } from './refact-prueba/refact-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmadoUnoComponent,
    ArmadoDosComponent,
    HomePageComponent,
    HabilidadesSelectComponent,
    SelectorMagiasComponent,
    EstadisticaArcanismoComponent,
    EstadisticaArcanismoComponent,
    EstadisticaVoluntadComponent,
    EstadisticaAstuciaComponent,
    EstadisticaCarismaComponent,
    EstadisticaDestrezaComponent,
    EstadisticaFuerzaComponent,
    EstadisticaInteligenciaComponent,
    EstadisticaResistenciaComponent,
    EstadisticaSabiduriaComponent,
    CrearPersonajeComponent,
    RefactPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
