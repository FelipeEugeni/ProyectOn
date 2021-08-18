import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArmadoUnoComponent} from './armado-ficha/armado-uno/armado-uno.component';
import {ArmadoDosComponent} from './armado-ficha/armado-dos/armado-dos.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HabilidadesSelectComponent} from './armado-ficha/armado-dos/componentes/habilidades/habilidades-select/habilidades-select.component';
import {FormsModule} from "@angular/forms";
import {SelectorMagiasComponent} from './armado-ficha/armado-tres/magias/magias-select/selector-magias.component';
import {EstadisticaArcanismoComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-arcanismo/estadistica-arcanismo.component';
import {EstadisticaVoluntadComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-voluntad/estadistica-voluntad.component';
import {EstadisticaAstuciaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-astucia/estadistica-astucia.component';
import {EstadisticaCarismaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-carisma/estadistica-carisma.component';
import {EstadisticaDestrezaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-destreza/estadistica-destreza.component';
import {EstadisticaFuerzaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-fuerza/estadistica-fuerza.component';
import {EstadisticaInteligenciaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-inteligencia/estadistica-inteligencia.component';
import {EstadisticaResistenciaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-resistencia/estadistica-resistencia.component';
import {EstadisticaSabiduriaComponent} from './armado-ficha/armado-dos/componentes/estadisticas/estadistica-sabiduria/estadistica-sabiduria.component';
import {RefactPruebaComponent} from './refact-prueba/refact-prueba.component';
import {ArmadoTresComponent} from './armado-ficha/armado-tres/armado-tres.component';
import {ArmadoCuatroComponent} from './armado-ficha/armado-cuatro/armado-cuatro.component';
import {ArmadoCincoComponent} from './armado-ficha/armado-cinco/armado-cinco.component';
import {ArmadoSeisComponent} from './armado-ficha/armado-seis/armado-seis.component';
import {ArmadoSieteComponent} from './armado-ficha/armado-siete/armado-siete.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HabilidadesHeroeComponent} from './armado-ficha/armado-dos/componentes/habilidades/habilidades-heroe/habilidades-heroe/habilidades-heroe.component';
import {EsenciasComponent} from './armado-ficha/armado-tres/esencias/esencias.component';
import {MagiasHereoComponent} from './armado-ficha/armado-tres/magias/magias-hereo/magias-hereo.component';
import {CrearTecnicaComponent} from './armado-ficha/armado-cinco/componentes/crear-tecnica/crear-tecnica.component';
import {MostrarTecnicaComponent} from './armado-ficha/armado-cinco/componentes/mostrar-tecnica/mostrar-tecnica/mostrar-tecnica.component';
import {DataPjComponent} from './armado-ficha/data-pj/data-pj.component';
import {InventarioSelecComponent} from './armado-ficha/armado-seis/inventario-selec/inventario-selec.component';


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
    HabilidadesHeroeComponent,
    EsenciasComponent,
    MagiasHereoComponent,
    CrearTecnicaComponent,
    MostrarTecnicaComponent,
    DataPjComponent,
    InventarioSelecComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
