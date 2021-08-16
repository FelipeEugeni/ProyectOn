import { Component, OnInit } from '@angular/core';
import {MagiasHeroeService} from "./service/magias-heroe.service";

@Component({
  selector: 'app-magias-hereo',
  templateUrl: './magias-hereo.component.html',
  styleUrls: ['./magias-hereo.component.css']
})
export class MagiasHereoComponent implements OnInit {

  constructor(
    public magiasHereoService: MagiasHeroeService
  ) { }

  ngOnInit(): void {
  }

}
