import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArmadoUnoComponent} from "./armado-ficha/armado-uno/armado-uno.component";
import {ArmadoDosComponent} from "./armado-ficha/armado-dos/armado-dos.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {HabilidadesSelectComponent} from "./armado-ficha/armado-dos/componentes/habilidades/habilidades-select/habilidades-select.component";
import {EstadisticaArcanismoComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-arcanismo/estadistica-arcanismo.component";
import {EstadisticaAstuciaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-astucia/estadistica-astucia.component";
import {EstadisticaCarismaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-carisma/estadistica-carisma.component";
import {EstadisticaDestrezaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-destreza/estadistica-destreza.component";
import {EstadisticaFuerzaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-fuerza/estadistica-fuerza.component";
import {EstadisticaInteligenciaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-inteligencia/estadistica-inteligencia.component";
import {EstadisticaResistenciaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-resistencia/estadistica-resistencia.component";
import {EstadisticaSabiduriaComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-sabiduria/estadistica-sabiduria.component";
import {EstadisticaVoluntadComponent} from "./armado-ficha/armado-dos/componentes/estadisticas/estadistica-voluntad/estadistica-voluntad.component";
import {RefactPruebaComponent} from "./refact-prueba/refact-prueba.component";
import {ArmadoTresComponent} from "./armado-ficha/armado-tres/armado-tres.component";
import {ArmadoCuatroComponent} from "./armado-ficha/armado-cuatro/armado-cuatro.component";
import {ArmadoCincoComponent} from "./armado-ficha/armado-cinco/armado-cinco.component";
import {ArmadoSeisComponent} from "./armado-ficha/armado-seis/armado-seis.component";
import {ArmadoSieteComponent} from "./armado-ficha/armado-siete/armado-siete.component";

const routes: Routes = [

  {path: 'crearheroe', children:[
      {path: 'pasouno', component: ArmadoUnoComponent},
      {path: 'pasodos', component: ArmadoDosComponent},
      {path: 'pasotres', component: ArmadoTresComponent},
      {path: 'pasocuatro', component: ArmadoCuatroComponent},
      {path: 'pasocinco', component:ArmadoCincoComponent},
      {path: 'pasoseis', component: ArmadoSeisComponent},
      {path: 'pasosiete', component: ArmadoSieteComponent}
    ]},

      {path: 'estadisticas', children:[
      {path:'arcanismo', component: EstadisticaArcanismoComponent},
      {path:'astucia', component: EstadisticaAstuciaComponent},
      {path:'carisma', component: EstadisticaCarismaComponent},
      {path:'destreza', component: EstadisticaDestrezaComponent},
      {path:'fuerza', component: EstadisticaFuerzaComponent},
      {path:'inteligencia', component: EstadisticaInteligenciaComponent},
      {path:'resistencia', component: EstadisticaResistenciaComponent},
      {path:'sabiduria', component: EstadisticaSabiduriaComponent},
      {path:'voluntad', component: EstadisticaVoluntadComponent},
    ]},

  {path: 'pruebas', component:RefactPruebaComponent},
  {path: 'habilidades', component: HabilidadesSelectComponent},
  {path:'homepage', component: HomePageComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
