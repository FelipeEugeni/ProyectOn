import {Component, OnInit} from '@angular/core';
import {ModificadoresService} from "./service/modificadores.service";
import {DataService} from "../../../service/data.service";
import {TecnicaService} from "../tecnica/service/tecnica.service";

@Component({
  selector: 'app-modificadores',
  templateUrl: './modificadores.component.html',
  styleUrls: ['./modificadores.component.css']
})
export class ModificadoresComponent implements OnInit {

  constructor(
    public armadoCincoService: ModificadoresService,
    public datosJugadorService: DataService,
    public crearTecnicaService: TecnicaService
  ) { }

  ngOnInit(): void {
  }
public cargaDatosJugador(): void{
  this.datosJugadorService.modificadoresJugador = this.armadoCincoService.modificadores
  this.datosJugadorService.tecnicasJugador = this.crearTecnicaService.tecnicasHereo
}
}
