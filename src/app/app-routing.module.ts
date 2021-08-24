import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArmadoUnoComponent} from "./armado-ficha-pasos/armado-uno/armado-uno.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {EstadisticaArcanismoComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-arcanismo/estadistica-arcanismo.component";
import {EstadisticaAstuciaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-astucia/estadistica-astucia.component";
import {EstadisticaCarismaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-carisma/estadistica-carisma.component";
import {EstadisticaDestrezaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-destreza/estadistica-destreza.component";
import {EstadisticaFuerzaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-fuerza/estadistica-fuerza.component";
import {EstadisticaInteligenciaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-inteligencia/estadistica-inteligencia.component";
import {EstadisticaResistenciaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-resistencia/estadistica-resistencia.component";
import {EstadisticaSabiduriaComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-sabiduria/estadistica-sabiduria.component";
import {EstadisticaVoluntadComponent} from "./armado-ficha-pasos/armado-uno/components/estadisticas/estadisticas-descripcion/estadistica-voluntad/estadistica-voluntad.component";
import {ArmadoDosComponent} from "./armado-ficha-pasos/armado-dos/armado-dos.component";
import {ArmadoTresComponent} from "./armado-ficha-pasos/armado-tres/armado-tres.component";
import {ArmadoFichaSimpleComponent} from "./armado-ficha-simple/armado-ficha-simple.component";
import {ArmadoCuatroComponent} from "./armado-ficha-pasos/armado-cuatro/armado-cuatro.component";

const routes: Routes = [

  {path: 'crearheroe', children:[
      {path: 'pasouno', component: ArmadoUnoComponent},
      {path: 'pasodos', component: ArmadoDosComponent},
      {path: 'pasotres', component:ArmadoTresComponent},
      {path: 'pasocuatro', component: ArmadoCuatroComponent}
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

  {path: 'armadosimple', component:ArmadoFichaSimpleComponent},
  {path:'homepage', component: HomePageComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
