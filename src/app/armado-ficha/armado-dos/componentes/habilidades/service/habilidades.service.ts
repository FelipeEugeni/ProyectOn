import { Injectable } from '@angular/core';
import {Habilidad} from "../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  public habilidadesHereo: Habilidad[] = [];
  constructor() { }

}
