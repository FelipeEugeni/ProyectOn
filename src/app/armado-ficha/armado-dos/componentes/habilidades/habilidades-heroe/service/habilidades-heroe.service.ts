import { Injectable } from '@angular/core';
import {HabilidadesService} from "../../service/habilidades.service";
import {Habilidad} from "../../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesHeroeService {
  public pHabilidad: number = 20;
  public habilidadesHereo: Habilidad[];
  constructor(
    public habilidadesServicce: HabilidadesService,
  ) {
    this.habilidadesHereo = this.habilidadesServicce.habilidadesHereo
  }
  public puntosHabilidades(valor: number, i: number) {
    if (this.habilidadesServicce.habilidadesHereo[i].puntos + valor <= 2 && this.habilidadesServicce.habilidadesHereo[i].puntos + valor  >= 0) {
      if (this.pHabilidad - valor <= 20 && this.pHabilidad - valor >= 0) {
        this.habilidadesServicce.habilidadesHereo[i].puntos = this.habilidadesServicce.habilidadesHereo[i].puntos + valor;
        this.pHabilidad = this.pHabilidad - valor;
      }
    }
  }
}
