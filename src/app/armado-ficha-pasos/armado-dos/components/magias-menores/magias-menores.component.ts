import {Component, OnInit} from '@angular/core';
import {MagiasMenoresService} from "./service/magias-menores.service";


@Component({
  selector: 'app-magias-menores',
  templateUrl: './magias-menores.component.html',
  styleUrls: ['./magias-menores.component.css']
})
export class MagiasMenoresComponent implements OnInit {
  public condicionId: number = 0;
  public magiaMenorId: number = 0;

  constructor(
    public magiasMenoresService: MagiasMenoresService,
  ) {
  }

  ngOnInit(): void {
  }

  public selectCondicion(id: number) {
    this.magiasMenoresService.condicionMenorHereo = this.magiasMenoresService.condicionesMenores[id];
  }

  public selectMagias(id: number) {
    if (this.magiasMenoresService.contador >= 0 && this.magiasMenoresService.contador <= 3) {
      this.magiasMenoresService.contador = this.magiasMenoresService.contador + 1;
      this.magiasMenoresService.magiasMenoresHereo.push(this.magiasMenoresService.magiasMenores[id])
    } else {
      alert('Ya Cubirste el cupo maximo de 4 Magias Menores por Personaje')
    }
  }
}
