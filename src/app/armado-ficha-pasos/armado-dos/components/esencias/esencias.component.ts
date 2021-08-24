import {Component, OnInit} from '@angular/core';
import {EsenciasService} from "./service/esencias.service";

@Component({
  selector: 'app-esencias',
  templateUrl: './esencias.component.html',
  styleUrls: ['./esencias.component.css']
})
export class EsenciasComponent implements OnInit {

  constructor(
    public esenciasService: EsenciasService
  ) { }

  ngOnInit(): void {
  }

}
