import {Injectable} from '@angular/core';
import {Clasificacion, Material, Objeto, ObjetoCompuesto} from "../../../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  public inventarioHeroe: ObjetoCompuesto[] = []
  public objetos: Objeto[] = [

    {
      nombre: 'Escudo incorporado',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes',
      durabilidad: 0,
      bonificacion: 4,
      objetoId: 1,
      requisitosId: 1,
      clasificacionId: 1
    },
    {
      nombre: 'Escudo ligero',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes,Perforantes',
      durabilidad: 0,
      bonificacion: 6,
      objetoId: 2,
      requisitosId: 1,
      clasificacionId: 1
    },
    {
      nombre: 'Escudo Mediano',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes',
      durabilidad: 0,
      bonificacion: 8,
      objetoId: 3,
      requisitosId: 1,
      clasificacionId: 1

    },
    {
      nombre: 'Escudo Grande',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 0,
      bonificacion: 10,
      objetoId: 4,
      requisitosId: 1,
      clasificacionId: 1
    },
    {
      nombre: 'Escudo Titánico',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 0,
      bonificacion: 12,
      objetoId: 5,
      requisitosId: 3,
      clasificacionId: 1

    },
    {
      nombre: 'Arma ligera',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes',
      durabilidad: 5,
      bonificacion: 6,
      objetoId: 6,
      requisitosId: 2,
      clasificacionId: 2
    },
    {
      nombre: 'Arma media ',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes',
      durabilidad: 7,
      bonificacion: 8,
      objetoId: 7,
      requisitosId: 1,
      clasificacionId: 2
    },
    {
      nombre: 'Arma pesada',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes, Contundente',
      durabilidad: 9,
      bonificacion: 10,
      objetoId: 8,
      requisitosId: 1,
      clasificacionId: 2

    },
    {
      nombre: 'Arma titánica',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 11,
      bonificacion: 12,
      objetoId: 9,
      requisitosId: 3,
      clasificacionId: 2
    },
    {
      nombre: 'Arma de Disparo ligero',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes,Perforantes',
      durabilidad: 0,
      bonificacion: 8,
      objetoId: 10,
      requisitosId: 2,
      clasificacionId: 3
    },
    {
      nombre: 'Arma de Disparo Mediano',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes',
      durabilidad: 0,
      bonificacion: 10,
      objetoId: 11,
      requisitosId: 2,
      clasificacionId: 3

    },
    {
      nombre: 'Arma de Disparo Grande',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 0,
      bonificacion: 12,
      objetoId: 12,
      requisitosId: 1,
      clasificacionId: 3
    },
    {
      nombre: 'Arma de Disparo Titánico',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 0,
      bonificacion: 14,
      objetoId: 13,
      requisitosId: 3,
      clasificacionId: 3

    },
    {
      nombre: 'Armadura ligera',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes',
      durabilidad: 3,
      bonificacion: 4,
      objetoId: 14,
      requisitosId: 1,
      clasificacionId: 4
    },
    {
      nombre: 'Armadura media ',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes',
      durabilidad: 5,
      bonificacion: 6,
      objetoId: 15,
      requisitosId: 1,
      clasificacionId: 4
    },
    {
      nombre: 'Armadura pesada',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Perforantes, Contundente',
      durabilidad: 2,
      bonificacion: 8,
      objetoId: 16,
      requisitosId: 1,
      clasificacionId: 4,

    },
    {
      nombre: 'Armadura titánica',
      descripcion: 'Defensas optimas: Cortantes, Lacerantes, Contundente, Perforantes',
      durabilidad: 9,
      bonificacion: 10,
      objetoId: 17,
      requisitosId: 1,
      clasificacionId: 4
    },
  ];
  public materialesInventario: Material[] = [
    {
      nombre: 'Cuero/Madera',
      durabilidad: 5,
      resistencia: 2,
      materialId: 0,
    },
    {
      nombre: 'Hueso',
      durabilidad: 7,
      resistencia: 4,
      materialId: 2,
    },
    {
      nombre: 'Bronce',
      durabilidad: 9,
      resistencia: 6,
      materialId: 3,
    },
    {
      nombre: 'Hierro',
      durabilidad: 11,
      resistencia: 8,
      materialId: 4,
    },
    {
      nombre: 'Acero',
      durabilidad: 13,
      resistencia: 10,
      materialId: 5,
    },
    {
      nombre: 'Paladio',
      durabilidad: 15,
      resistencia: 12,
      materialId: 6,
    },
    {
      nombre: 'Arcanita',
      durabilidad: 17,
      resistencia: 14,
      materialId: 7,
    },
    {
      nombre: 'Tungsteno',
      durabilidad: 21,
      resistencia: 16,
      materialId: 8,
    },
  ]
  public municiones: Material[] = [
    {
      nombre: 'Madera',
      durabilidad: 0,
      resistencia: 5,
      materialId: 2,
    },
    {
      nombre: 'Hueso',
      durabilidad: 0,
      resistencia: 7,
      materialId: 3,
    },
    {
      nombre: 'Bronce',
      durabilidad: 0,
      resistencia: 9,
      materialId: 4,
    },
    {
      nombre: 'Hierro',
      durabilidad: 0,
      resistencia: 11,
      materialId: 5,
    },
    {
      nombre: 'Acero',
      durabilidad: 0,
      resistencia: 13,
      materialId: 6,
    },
    {
      nombre: 'Paladio',
      durabilidad: 0,
      resistencia: 15,
      materialId: 7,
    },
    {
      nombre: 'Arcanita',
      durabilidad: 0,
      resistencia: 17,
      materialId: 8,
    },
    {
      nombre: 'Tungsteno',
      durabilidad: 0,
      resistencia: 21,
      materialId: 9,
    },
  ]
  public tiposDeObjetos: Clasificacion[] = [
    {nombre: 'Escudo', clasificacionId: 1},
    {nombre: 'Armas Cuerpo a Cuerpo', clasificacionId: 2},
    {nombre: 'Armas a Distancia', clasificacionId: 3},
    {nombre: 'Armaduras', clasificacionId: 4}
  ]

  constructor() {
  }

}
