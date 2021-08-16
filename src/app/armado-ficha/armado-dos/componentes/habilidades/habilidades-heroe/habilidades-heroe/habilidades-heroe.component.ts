import { Component, OnInit } from '@angular/core';
import {HabilidadesHeroeService} from "../service/habilidades-heroe.service";

@Component({
  selector: 'app-habilidades-heroe',
  templateUrl: './habilidades-heroe.component.html',
  styleUrls: ['./habilidades-heroe.component.css']
})
export class HabilidadesHeroeComponent implements OnInit {

  constructor(
    public habilidadesHeroeService: HabilidadesHeroeService
  ) { }

  ngOnInit(): void {
  }

}
