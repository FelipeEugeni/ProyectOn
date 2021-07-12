import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArmadoUnoComponent} from "./crear-personaje/armado-ficha/armado-uno/armado-uno.component";
import {AppComponent} from "./app.component";
import {ArmadoDosComponent} from "./crear-personaje/armado-ficha/armado-dos/armado-dos.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {HabilidadesSelectComponent} from "./crear-personaje/armado-ficha/armado-uno/habilidades-select/habilidades-select.component";
import {EstadisticaArcanismoComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-arcanismo/estadistica-arcanismo.component";
import {EstadisticaAstuciaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-astucia/estadistica-astucia.component";
import {EstadisticaCarismaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-carisma/estadistica-carisma.component";
import {EstadisticaDestrezaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-destreza/estadistica-destreza.component";
import {EstadisticaFuerzaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-fuerza/estadistica-fuerza.component";
import {EstadisticaInteligenciaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-inteligencia/estadistica-inteligencia.component";
import {EstadisticaResistenciaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-resistencia/estadistica-resistencia.component";
import {EstadisticaSabiduriaComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-sabiduria/estadistica-sabiduria.component";
import {EstadisticaVoluntadComponent} from "./crear-personaje/armado-ficha/armado-uno/estadisticas/estadistica-voluntad/estadistica-voluntad.component";
import {CrearPersonajeComponent} from "./crear-personaje/crear-personaje.component";

const routes: Routes = [

  {path: "Crear Personaje/:paso", component: CrearPersonajeComponent, children: [
      {path: "Armado 1", component: ArmadoUnoComponent},
      {path: "Armado 2", component: ArmadoDosComponent},

    ]},
  {path: "", component: HomePageComponent},
  {path: "Habilidades Select", component: HabilidadesSelectComponent},
  {path:'Arcanismo', component: EstadisticaArcanismoComponent},
  {path:'Astucia', component: EstadisticaAstuciaComponent},
  {path:'Carisma', component: EstadisticaCarismaComponent},
  {path:'Destreza', component: EstadisticaDestrezaComponent},
  {path:'Fuerza', component: EstadisticaFuerzaComponent},
  {path:'Inteligencia', component: EstadisticaInteligenciaComponent},
  {path:'Resistencia', component: EstadisticaResistenciaComponent},
  {path:'Sabiduria', component: EstadisticaSabiduriaComponent},
  {path:'Voluntad', component: EstadisticaVoluntadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
