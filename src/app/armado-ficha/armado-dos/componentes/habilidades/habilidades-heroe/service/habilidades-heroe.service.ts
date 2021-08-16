import { Injectable } from '@angular/core';
import {HabilidadesServiceService} from "../../service/habilidades-service.service";
import {HabilidadSelect} from "../../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesHeroeService {
  public pHabilidad: number = 20;
  public habilidadesHereo: HabilidadSelect[];
  constructor(
    public habilidadesServicce: HabilidadesServiceService,
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
