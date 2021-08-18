import {Component, OnInit} from '@angular/core';
import {Estadistica, Habilidad} from "../../../../../shared/interface/interface-armado";
import {HabilidadesSelectService} from "./service/habilidades-select.service";
import {HabilidadesService} from "../service/habilidades.service";

@Component({
  selector: 'app-habilidades-select',
  templateUrl: './habilidades-select.component.html',
  styleUrls: ['./habilidades-select.component.css']
})
export class HabilidadesSelectComponent implements OnInit {
  public estadisticasid: Estadistica[];
  public estadisticaCarga: number = 0;
  public habilidadesid: Habilidad[];
  public habilidadCarga: number = 0;

  constructor(
    public habilidadesSelecService: HabilidadesSelectService,
    public habilidadesService: HabilidadesService
  ) {

  }

  ngOnInit(): void {
    this.estadisticasid = this.habilidadesSelecService.getEstadisticas().filter(item => item.puntos >= 1)
  }

  public selectHabilidades(id: number): void {
    this.habilidadesid = this.habilidadesSelecService.getHabilidades().filter(item => item.statId == id)
  }


  public cargaHabilidades(id: number):void {
    if (id != 0) {
      let bulleano: boolean = true;
      for (let i = 0; i < this.habilidadesService.habilidadesHereo.length; i++) {
        if (this.habilidadesid.filter(item => item.skillId == id)[0] === this.habilidadesService.habilidadesHereo[i]) {
          alert('Ya tienes Esta Habilidad')
          bulleano = false
        }
      }
      if (bulleano === true) {
        this.habilidadesService.habilidadesHereo.push(this.habilidadesid.filter(item => item.skillId == id)[0]);
      }
    }
  }

}
