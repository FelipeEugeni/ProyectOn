import { Component, OnInit } from '@angular/core';
import {ArmadoCincoService} from "./service/armado-cinco.service";
import {DataService} from "../data-pj/servicios-armado-ficha/data.service";
import {CrearTecnicaService} from "./componentes/service/crear-tecnica.service";

@Component({
  selector: 'app-armado-cinco',
  templateUrl: './armado-cinco.component.html',
  styleUrls: ['./armado-cinco.component.css']
})
export class ArmadoCincoComponent implements OnInit {

  constructor(
    public armadoCincoService: ArmadoCincoService,
    public datosJugadorService: DataService,
    public crearTecnicaService: CrearTecnicaService
  ) { }

  ngOnInit(): void {
  }
public cargaDatosJugador(): void{
  this.datosJugadorService.modificadoresJugador = this.armadoCincoService.modificadores
  this.datosJugadorService.tecnicasJugador = this.crearTecnicaService.tecnicasHereo
}
}
