import { Injectable } from '@angular/core';
import {MagiaMenor} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoCuatroService {
public magiasMenoresHereo: MagiaMenor = {magiaMenor: 'Elije Una Magia Menor:', condicion: 'Elije Tu Condicion'};
  constructor() { }
}
