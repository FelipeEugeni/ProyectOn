import { Component, OnInit } from '@angular/core';
import {DataService} from "./servicios-armado-ficha/data.service";

@Component({
  selector: 'app-data-pj',
  templateUrl: './data-pj.component.html',
  styleUrls: ['./data-pj.component.css']
})
export class DataPjComponent implements OnInit {

  constructor(
    public datosJugadorService: DataService
  ) { }

  ngOnInit(): void {
  }

}
