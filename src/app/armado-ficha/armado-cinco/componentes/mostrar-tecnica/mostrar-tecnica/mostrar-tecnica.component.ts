import { Component, OnInit } from '@angular/core';
import {CrearTecnicaService} from "../../service/crear-tecnica.service";

@Component({
  selector: 'app-mostrar-tecnica',
  templateUrl: './mostrar-tecnica.component.html',
  styleUrls: ['./mostrar-tecnica.component.css']
})
export class MostrarTecnicaComponent implements OnInit {

  constructor(
    public crearTecnicaService: CrearTecnicaService
  ) { }

  ngOnInit(): void {
  }

}
