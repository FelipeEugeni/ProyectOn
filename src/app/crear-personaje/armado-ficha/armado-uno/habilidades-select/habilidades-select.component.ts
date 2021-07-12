import {Component, OnInit,} from '@angular/core';
import {BinaryOperator} from "@angular/compiler";

@Component({
  selector: 'app-habilidades-select',
  templateUrl: './habilidades-select.component.html',
  styleUrls: ['./habilidades-select.component.css']
})
export class HabilidadesSelectComponent implements OnInit {

  public SelectedEstadisticas: EstadisticasI={id:0, name:''};

  public estadisticas: EstadisticasI[] =  [
    {
      id:1,
      name:'Arcanismo',
    },
    {
      id:2,
      name:'Astucia',
    }
  ]
  public stats: EstadisticasI[] = [];
  getEstadisticas():EstadisticasI[]{
    return this.estadisticas;
  }

  public habilidades: HabilidadesI[] = [
    {
      id:1,
      estadisticaId:1,
      name:'Armas mágicas',
    },
    {
      id:2,
      estadisticaId:1,
      name:'Meditacion',
    },
    {
      id:3,
      estadisticaId:1,
      name:'Ocultismo',
    },
    {
      id:4,
      estadisticaId:1,
      name:'Pociones',
    },
    {
      id:5,
      estadisticaId:1,
      name:'Resistencia mágica',
    },
    {
      id:6,
      estadisticaId:1,
      name:'Rituales',
    },
    {
      id:7,
      estadisticaId:1,
      name:'Rúnico',
    },
    {
      id:8,
      estadisticaId:2,
      name:'Alerta',
    },
    {
      id:9,
      estadisticaId:2,
      name:'Armamento improvisado',
    },
    {
      id:10,
      estadisticaId:2,
      name:'Callejeo',
    },
    {
      id:11,
      estadisticaId:2,
      name:'Finanzas',
    },
    {
      id:11,
      estadisticaId:2,
      name:'Latrocinio',
    },
    {
      id:11,
      estadisticaId:2,
      name:'Mentir',
    },
    {
      id:11,
      estadisticaId:2,
      name:'Puntería',
    },
  ]
  getHabilidades(): HabilidadesI[]{
    return this.habilidades;
  }
  public skill: HabilidadesI[] = [];




  constructor() {

  }

  ngOnInit(): void {
this.stats = this.getEstadisticas()
  }

  onSelected(id: number):void{
    console.log('id->', id)
  }
}

interface EstadisticasI {
  id:number;
  name:string;
}

export interface HabilidadesI {
  id:number;
  estadisticaId:number;
  name:string;
}
