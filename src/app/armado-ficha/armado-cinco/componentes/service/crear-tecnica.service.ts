import { Injectable } from '@angular/core';
import {Tecnica} from "../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class CrearTecnicaService {
public tecnicasHereo: Tecnica[] = [];
  constructor() { }
}
