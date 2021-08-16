import { Component, OnInit } from '@angular/core';
import {ArmadoCuatroService} from "./service/armado-cuatro.service";
import {DataService} from "../data-pj/servicios-armado-ficha/data.service";

@Component({
  selector: 'app-armado-cuatro',
  templateUrl: './armado-cuatro.component.html',
  styleUrls: ['./armado-cuatro.component.css']
})
export class ArmadoCuatroComponent implements OnInit {

  constructor(
    public armadoCuatroService: ArmadoCuatroService,
    public datosJugadorService: DataService,
  ) { }

  ngOnInit(): void {
  }
  public cargaDatosJugador(): void{
  this.datosJugadorService.magiasMenoresJugador = this.armadoCuatroService.magiasMenoresHereo
  }
}
