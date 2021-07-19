import {NgModule, Output} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmadoUnoComponent } from './armado-ficha/armado-uno/armado-uno.component';
import { ArmadoDosComponent } from './armado-ficha/armado-dos/armado-dos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HabilidadesSelectComponent } from './armado-ficha/armado-uno/habilidades-select/habilidades-select.component';
import {FormsModule} from "@angular/forms";
import { SelectorMagiasComponent } from './armado-ficha/armado-uno/magias-select/selector-magias.component';
import { EstadisticaArcanismoComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-arcanismo/estadistica-arcanismo.component';
import { EstadisticaVoluntadComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-voluntad/estadistica-voluntad.component';
import { EstadisticaAstuciaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-astucia/estadistica-astucia.component';
import { EstadisticaCarismaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-carisma/estadistica-carisma.component';
import { EstadisticaDestrezaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-destreza/estadistica-destreza.component';
import { EstadisticaFuerzaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-fuerza/estadistica-fuerza.component';
import { EstadisticaInteligenciaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-inteligencia/estadistica-inteligencia.component';
import { EstadisticaResistenciaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-resistencia/estadistica-resistencia.component';
import { EstadisticaSabiduriaComponent } from './armado-ficha/armado-dos/estadisticas/estadistica-sabiduria/estadistica-sabiduria.component';
import { RefactPruebaComponent } from './refact-prueba/refact-prueba.component';
import { ArmadoTresComponent } from './armado-ficha/armado-tres/armado-tres.component';
import { ArmadoCuatroComponent } from './armado-ficha/armado-cuatro/armado-cuatro.component';
import { ArmadoCincoComponent } from './armado-ficha/armado-cinco/armado-cinco.component';
import { ArmadoSeisComponent } from './armado-ficha/armado-seis/armado-seis.component';
import { ArmadoSieteComponent } from './armado-ficha/armado-siete/armado-siete.component';


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
    RefactPruebaComponent,
    ArmadoTresComponent,
    ArmadoCuatroComponent,
    ArmadoCincoComponent,
    ArmadoSeisComponent,
    ArmadoSieteComponent,
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
