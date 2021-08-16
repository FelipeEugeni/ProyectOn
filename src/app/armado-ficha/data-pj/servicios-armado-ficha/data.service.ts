import { Injectable } from '@angular/core';
import {
  Dato,
  Esencias,
  Estadistica,
  Habilidad,
  Magia,
  MagiaMenor,
  Modificador, Tecnica
} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public datosJugador: Dato;
  public estadisticasJugador: Estadistica[];
  public habilidadesJugador: Habilidad[];
  public esenciasJugador: Esencias[];
  public magiasJugador: Magia[];
  public magiasMenoresJugador: MagiaMenor;
  public modificadoresJugador: Modificador[];
  public tecnicasJugador: Tecnica[];
  constructor() {
  }
}


