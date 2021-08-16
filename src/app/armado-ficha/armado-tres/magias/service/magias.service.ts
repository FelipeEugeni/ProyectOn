import { Injectable } from '@angular/core';
import {Magia} from "../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class MagiasService {
  public magiasHereo: Magia[] = [];
  constructor() { }
}
