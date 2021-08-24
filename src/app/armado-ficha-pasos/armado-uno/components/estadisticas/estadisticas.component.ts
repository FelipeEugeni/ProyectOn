import {Component, OnInit} from '@angular/core';
import {EstadisticasService} from "./service/estadisticas.service";
import {DataService} from "../../../service/data.service";
import {HabilidadesService} from "../habilidades/service/habilidades.service";


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {


  constructor(
    public estadisticasService: EstadisticasService,
    public datosJugadorService: DataService,
    public habilidadesService: HabilidadesService,
  ) {
  }

  ngOnInit(): void {
  }



  public cargaDatosJugador(): void {
    this.datosJugadorService.estadisticasJugador = this.estadisticasService.prEtadisticas;
    this.datosJugadorService.habilidadesJugador = this.habilidadesService.habilidadesHereo;
  }
}
