import {Component, OnInit,} from '@angular/core';
import {ArmadoUnoService} from "./service/armado-uno.service";
import {DataService} from "../data-pj/servicios-armado-ficha/data.service";

@Component({
  selector: 'app-armado-uno',
  templateUrl: './armado-uno.component.html',
  styleUrls: ['./armado-uno.component.css']
})

export class ArmadoUnoComponent implements OnInit {

  constructor(
    public armadoUnoService: ArmadoUnoService,
    public datosJugadorService: DataService,
  ) {
  }

  ngOnInit(): void {
  }
  public cargaDatosJugador(): void{
this.datosJugadorService.datosJugador = this.armadoUnoService.datosPersonaje;
  }

}



