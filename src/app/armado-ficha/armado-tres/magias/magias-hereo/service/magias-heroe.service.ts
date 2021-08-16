import { Injectable } from '@angular/core';
import {Magia} from "../../../../../shared/interface/interface-armado";

import {MagiasService} from "../../service/magias.service";

@Injectable({
  providedIn: 'root'
})
export class MagiasHeroeService {
  public pMagias: number = 10;
  public magiasHereo: Magia[];
  constructor(
    public magiasServicce: MagiasService,
  ) {
    this.magiasHereo = this.magiasServicce.magiasHereo
  }
  public puntosMagias(valor: number, i: number) {
    if (this.magiasServicce.magiasHereo[i].puntos + valor <= 2 && this.magiasServicce.magiasHereo[i].puntos + valor  >= 0) {
      if (this.pMagias - valor <= 10 && this.pMagias - valor >= 0) {
        this.magiasServicce.magiasHereo[i].puntos = this.magiasServicce.magiasHereo[i].puntos + valor;
        this.pMagias = this.pMagias - valor;
      }
    }
  }
}
