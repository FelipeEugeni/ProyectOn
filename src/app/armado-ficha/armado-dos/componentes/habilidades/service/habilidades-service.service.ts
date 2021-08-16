import { Injectable } from '@angular/core';
import {HabilidadSelect} from "../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesServiceService {
  public habilidadesHereo: HabilidadSelect[] = [];
  constructor() { }

}
