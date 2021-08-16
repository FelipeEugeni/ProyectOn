import {Component, OnInit} from '@angular/core';
import {ArmadoDosService} from "./service/armado-dos.service";
import {DataService} from "../data-pj/servicios-armado-ficha/data.service";
import {HabilidadesService} from "./componentes/habilidades/service/habilidades.service";



@Component({
  selector: 'app-armado-dos',
  templateUrl: './armado-dos.component.html',
  styleUrls: ['./armado-dos.component.css']
})
export class ArmadoDosComponent implements OnInit {

  constructor(
    public armadoDosService: ArmadoDosService,
    public datosJugadorService: DataService,
    public habilidadesService: HabilidadesService
  ) {
  }

  ngOnInit(): void {

  }
  public cargaDatosJugador(): void{
this.datosJugadorService.estadisticasJugador = this.armadoDosService.prEtadisticas;
this.datosJugadorService.habilidadesJugador = this.habilidadesService.habilidadesHereo;
  }
}
