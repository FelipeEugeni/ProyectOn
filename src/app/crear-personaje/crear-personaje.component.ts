import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {
  public pasoActual: number = 1;


  constructor(
    private rout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pasoActual = 1;
  }

public SiguientePaso() {

    this.pasoActual = this.pasoActual +1
}
}
