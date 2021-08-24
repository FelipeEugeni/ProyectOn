import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArmadoUnoComponent} from './armado-ficha-pasos/armado-uno/armado-uno.component';
import {EstadisticasComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HabilidadesComponent} from './armado-ficha-pasos/armado-uno/components/habilidades/habilidades.component';
import {FormsModule} from "@angular/forms";
import {MagiasComponent} from './armado-ficha-pasos/armado-dos/components/magias/magias.component';
import {EstadisticaArcanismoComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-arcanismo/estadistica-arcanismo.component';
import {EstadisticaVoluntadComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-voluntad/estadistica-voluntad.component';
import {EstadisticaAstuciaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-astucia/estadistica-astucia.component';
import {EstadisticaCarismaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-carisma/estadistica-carisma.component';
import {EstadisticaDestrezaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-destreza/estadistica-destreza.component';
import {EstadisticaFuerzaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-fuerza/estadistica-fuerza.component';
import {EstadisticaInteligenciaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-inteligencia/estadistica-inteligencia.component';
import {EstadisticaResistenciaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-resistencia/estadistica-resistencia.component';
import {EstadisticaSabiduriaComponent} from './armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-sabiduria/estadistica-sabiduria.component';
import {RefactPruebaComponent} from './refact-prueba/refact-prueba.component';
import {ArmadoDosComponent} from './armado-ficha-pasos/armado-dos/armado-dos.component';
import {MagiasMenoresComponent} from './armado-ficha-pasos/armado-dos/components/magias-menores/magias-menores.component';
import {ModificadoresComponent} from './armado-ficha-pasos/armado-tres/components/modificadores/modificadores.component';
import {ArmadoTresComponent} from './armado-ficha-pasos/armado-tres/armado-tres.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EsenciasComponent} from './armado-ficha-pasos/armado-dos/components/esencias/esencias.component';
import {TecnicaComponent} from './armado-ficha-pasos/armado-tres/components/tecnica/tecnica.component';
import {InventarioComponent} from './armado-ficha-pasos/armado-tres/components/inventario/inventario.component';
import {EncabezadoComponent} from './armado-ficha-pasos/armado-uno/components/encabezado/encabezado.component';
import {ArmadoFichaSimpleComponent} from './armado-ficha-simple/armado-ficha-simple.component';
import {ArmadoCuatroComponent} from './armado-ficha-pasos/armado-cuatro/armado-cuatro.component';
import {HistoriaComponent} from './armado-ficha-pasos/armado-cuatro/historia/historia.component';


@NgModule({
  declarations: [
    AppComponent,
    ArmadoUnoComponent,
    EstadisticasComponent,
    HomePageComponent,
    HabilidadesComponent,
    MagiasComponent,
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
    ArmadoDosComponent,
    MagiasMenoresComponent,
    ModificadoresComponent,
    ArmadoTresComponent,
    EsenciasComponent,
    TecnicaComponent,
    InventarioComponent,
    EncabezadoComponent,
    MagiasMenoresComponent,
    ArmadoFichaSimpleComponent,
    ArmadoCuatroComponent,
    HistoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CKEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
