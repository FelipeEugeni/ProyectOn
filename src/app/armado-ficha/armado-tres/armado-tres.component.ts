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

  constructor(
    public armadoTresService: ArmadoTresService,
    public datosJugadorService: DataService,
    public magiasService: MagiasService,
  ) {
  }

  ngOnInit(): void {
  }
  public cargaDatosJugador(): void{
    this.datosJugadorService.esenciasJugador = this.armadoTresService.prEsencias;
    this.datosJugadorService.magiasJugador = this.magiasService.magiasHereo;
  }
}

