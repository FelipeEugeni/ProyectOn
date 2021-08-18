import {Injectable} from '@angular/core';
import {ArmadoDosService} from "../../armado-dos/service/armado-dos.service";
import {Estadistica, Modificador} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoCincoService {
public estadisticasHereo: Estadistica[] = [
  {
  nombre: 'Arcanismo',
  puntos: 0,
  statId: 1
},
  {
    nombre: 'Astucia',
    puntos: 0,
    statId: 2
  },
  {
    nombre: 'Carisma',
    puntos: 0,
    statId: 3
  },
  {
    nombre: 'Destreza',
    puntos: 0,
    statId: 4
  },
  {
    nombre: 'Fuerza',
    puntos: 0,
    statId: 5
  },
  {
    nombre: 'Inteligencia',
    puntos: 0,
    statId: 6
  },

  {
    nombre: 'Resistencia',
    puntos: 0,
    statId: 7
  },

  {
    nombre: 'Sabiduria',
    puntos: 0,
    statId: 8
  },

  {
    nombre: 'Voluntad',
    puntos: 0,
    statId: 9
  }
  ]
public modificadores: Modificador[] = [
  {
    nombre: 'Claridad Mental',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Claridad Magica',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Defenciva Fisica',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Defenciva Magica',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Ofenciva Fisica',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Ofenciva Magica',
    dado: 'Roll 1d6',
    valor:0
  },
  {
    nombre: 'Vitalidad',
    dado: 'Roll 1d10',
    valor: 0
  }
]
  public dado1d20: any = 'Roll 1d20';
  constructor(
    private armadoDosService: ArmadoDosService
  ) {
    this.estadisticasHereo = this.armadoDosService.prEtadisticas
  }
public rollDeDiez(): void {
  this.modificadores[6].dado = 0;
  let dados: number[] = [];
  for (let i = 0; i < this.estadisticasHereo[6].puntos; i++) {
    dados.push(Math.floor(Math.random() * (10) + 1));
    this.modificadores[6].dado = this.modificadores[6].dado + dados[i];
  }

}

  public rollDeVeinte(): void {
    this.dado1d20 = 0;
    this.dado1d20 = Math.floor(Math.random() * (20) + 1);
  }

  public rollDeSeis(i: number): void {
    this.modificadores[i].dado = 0;
    this.modificadores[i].dado = Math.floor(Math.random() * (6) + 1);
  }

  public calcularModificadores(valor: number, i: number): void {
    this.modificadores[i].valor = this.modificadores[i].dado + this.estadisticasHereo[valor].puntos;
  }

  public calcularVitalidad(): void {
    this.modificadores[6].valor = 20 + this.dado1d20 + this.modificadores[6].dado
  }
}
