import {Component, OnInit} from '@angular/core';
import {EstadisticasService} from "../armado-ficha-pasos/armado-uno/components/estadisticas/service/estadisticas.service";
import {EsenciasService} from "../armado-ficha-pasos/armado-dos/components/esencias/service/esencias.service";

@Component({
  selector: 'app-armado-ficha-simple',
  templateUrl: './armado-ficha-simple.component.html',
  styleUrls: ['./armado-ficha-simple.component.css']
})
export class ArmadoFichaSimpleComponent implements OnInit {

  constructor(
    public estadisticaService: EstadisticasService,
    public esenciasService: EsenciasService
  ) {
  }

  ngOnInit(): void {
  }

  public mostrarSelecHabilidades(): void {
    if (this.estadisticaService.pEstadisticas != 10) {
      this.estadisticaService.contador = this.estadisticaService.contador + 1;
    } else {
      alert('Debe Seleccionar Una Estadistica Primero')
    }
  }

  public mostrarSelecMagias(): void {
    if (this.esenciasService.pEsencia != 5) {
      this.esenciasService.contador = this.esenciasService.contador + 1;
    } else {
      alert('Debe Seleccionar Una Esencia Primero')
    }
  }
}
