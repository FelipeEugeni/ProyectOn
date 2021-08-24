import {Component, OnInit} from '@angular/core';
import {Esencias, Magia} from "../../../../shared/interface/interface-armado";
import {MagiasService} from "./service/magias.service";

@Component({
  selector: 'app-magias',
  templateUrl: './magias.component.html',
  styleUrls: ['./magias.component.css']
})
export class MagiasComponent implements OnInit {
  public esenciaid: Esencias[];
  public esenciaCarga: number = 0;
  public magiaid: Magia[];
  public magiaCarga: number = 0;

  constructor(
    public magiasSelecService: MagiasService,
  ) {

  }

  ngOnInit(): void {
    this.esenciaid = this.magiasSelecService.getEsencias().filter(item => item.puntos >= 1)
  }

  public selectMagias(id: number): void {
    this.magiaid = this.magiasSelecService.getMagias().filter(item => item.esenciaId == id)
  }


  public cargaMagias(id: number):void {
    if (id != 0) {
      let bulleano: boolean = true;
      for (let i = 0; i < this.magiasSelecService.magiasHereo.length; i++) {
        if (this.magiaid.filter(item => item.skillId == id)[0] === this.magiasSelecService.magiasHereo[i]) {
          alert('Ya tienes Esta Magia')
          bulleano = false
        }
      }
      if (bulleano === true) {
        this.magiasSelecService.magiasHereo.push(this.magiaid.filter(item => item.skillId == id)[0]);
      }
    }
  }
  public puntosMagias(valor: number, i: number) {
    if (this.magiasSelecService.magiasHereo[i].puntos + valor <= 2 && this.magiasSelecService.magiasHereo[i].puntos + valor  >= 0) {
      if (this.magiasSelecService.pMagias - valor <= 10 && this.magiasSelecService.pMagias - valor >= 0) {
        this.magiasSelecService.magiasHereo[i].puntos = this.magiasSelecService.magiasHereo[i].puntos + valor;
        this.magiasSelecService.pMagias = this.magiasSelecService.pMagias - valor;
      }
    }
  }
}
