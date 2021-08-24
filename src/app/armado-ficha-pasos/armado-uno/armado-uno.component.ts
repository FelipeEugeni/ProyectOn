import {Component, OnInit,} from '@angular/core';
import {ArmadoUnoService} from "./service/armado-uno.service";
import {DataService} from "../service/data.service";
import {EstadisticasService} from "./components/estadisticas/service/estadisticas.service";

@Component({
  selector: 'app-armado-uno',
  templateUrl: './armado-uno.component.html',
  styleUrls: ['./armado-uno.component.css']
})

export class ArmadoUnoComponent implements OnInit {

  constructor(
    public armadoUnoService: ArmadoUnoService,
    public datosJugadorService: DataService,
    public estadisticaService: EstadisticasService,
  ) {
  }

  ngOnInit(): void {
  }
  public mostrarSelec(): void {
    if (this.estadisticaService.pEstadisticas != 10) {
      this.estadisticaService.contador = this.estadisticaService.contador + 1;
    } else {
      alert('Debe Seleccionar Una Estadistica Primero')
    }
  }
  public cargaDatosJugador(): void{
  this.datosJugadorService.datosJugador = this.armadoUnoService.datosPersonaje;
  }

}



