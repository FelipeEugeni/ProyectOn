import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";
import {EsenciasService} from "./components/esencias/service/esencias.service";


@Component({
  selector: 'app-armado-tres',
  templateUrl: './armado-dos.component.html',
  styleUrls: ['./armado-dos.component.css']
})
export class ArmadoDosComponent implements OnInit {


  constructor(
    public datosJugadorService: DataService,
    public esenciasService: EsenciasService
  ) {
  }

  ngOnInit(): void {
  }

  public mostrarSelec(): void {
    if (this.esenciasService.pEsencia != 5) {
      this.esenciasService.contador = this.esenciasService.contador + 1;
    } else {
      alert('Debe Seleccionar Una Esencia Primero')
    }
  }

  public cargaDatosJugador(): void {
    this.datosJugadorService.esenciasJugador = this.esenciasService.prEsencias;
  }
}

