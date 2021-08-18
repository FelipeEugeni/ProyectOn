import {Injectable} from '@angular/core';
import {MagiaMenor} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoCuatroService {
  public magiasMenoresHereo: MagiaMenor = {magiaMenor: 'Elige Una Magia Menor:', condicion: 'Elige Tu Condicion'};
  constructor() { }
}
