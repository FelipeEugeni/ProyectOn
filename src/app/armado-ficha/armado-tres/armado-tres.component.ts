import {Component, OnInit} from '@angular/core';
import {ArmadoTresService} from "./service/armado-tres.service";
import {DataService} from "../data-pj/servicios-armado-ficha/data.service";
import {MagiasService} from "./magias/service/magias.service";

@Component({
  selector: 'app-armado-tres',
  templateUrl: './armado-tres.component.html',
  styleUrls: ['./armado-tres.component.css']
})
export class ArmadoTresComponent implements OnInit {
  public contador: number = 0;

  constructor(
    public armadoTresService: ArmadoTresService,
    public datosJugadorService: DataService,
    public magiasService: MagiasService,
  ) {
  }

  ngOnInit(): void {
  }

  public mostrarSelec(): void {
    if (this.armadoTresService.pEsencia != 5) {
      this.contador = this.contador + 1;
    } else {
      alert('Debe Seleccionar Una Esencia Primero')
    }
  }

  public cargaDatosJugador(): void {
    this.datosJugadorService.esenciasJugador = this.armadoTresService.prEsencias;
    this.datosJugadorService.magiasJugador = this.magiasService.magiasHereo;
  }
}

