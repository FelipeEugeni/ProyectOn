import {Component, OnInit} from '@angular/core';
import {Estadistica, Habilidad} from "../../../../shared/interface/interface-armado";
import {HabilidadesService} from "./service/habilidades.service";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public estadisticasid: Estadistica[];
  public estadisticaCarga: number = 0;
  public habilidadesid: Habilidad[];
  public habilidadCarga: number = 0;

  constructor(
    public habilidadesService: HabilidadesService
  ) {

  }

  ngOnInit(): void {
    this.estadisticasid = this.habilidadesService.getEstadisticas().filter(item => item.puntos >= 1)
  }

  public selectHabilidades(id: number): void {
    this.habilidadesid = this.habilidadesService.getHabilidades().filter(item => item.statId == id)
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
  public puntosHabilidades(valor: number, i: number) {
    if (this.habilidadesService.habilidadesHereo[i].puntos + valor <= 2 && this.habilidadesService.habilidadesHereo[i].puntos + valor >= 0) {
      if (this.habilidadesService.pHabilidad - valor <= 20 && this.habilidadesService.pHabilidad - valor >= 0) {
        this.habilidadesService.habilidadesHereo[i].puntos = this.habilidadesService.habilidadesHereo[i].puntos + valor;
        this.habilidadesService.pHabilidad = this.habilidadesService.pHabilidad - valor;
      }
    }
  }
}
