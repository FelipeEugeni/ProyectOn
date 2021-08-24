import {Injectable} from '@angular/core';
import {Dato, Nivel} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoUnoService {
  public experienciaSelect: Nivel[] = [
    {nivel: 0, exp: 0},
    {nivel: 1, exp: 200},
    {nivel: 2, exp: 300},
    {nivel: 3, exp: 425},
    {nivel: 4, exp: 575},
    {nivel: 5, exp: 750},
    {nivel: 6, exp: 950},
    {nivel: 7, exp: 1175},
    {nivel: 8, exp: 1425},
    {nivel: 9, exp: 1700},
    {nivel: 10, exp: 2000},
    {nivel: 11, exp: 2325},
    {nivel: 12, exp: 2700},
    {nivel: 13, exp: 3125},
    {nivel: 14, exp: 3600},
    {nivel: 15, exp: 4125},
    {nivel: 16, exp: 4700},
    {nivel: 17, exp: 5325},
    {nivel: 18, exp: 6000},
    {nivel: 19, exp: 6725},
    {nivel: 20, exp: 7500},
    {nivel: 21, exp: 8325},
    {nivel: 22, exp: 9250},
    {nivel: 23, exp: 10275},
    {nivel: 24, exp: 11400},
    {nivel: 25, exp: 12625},
    {nivel: 26, exp: 13950},
    {nivel: 27, exp: 15425},
    {nivel: 28, exp: 17045},
    {nivel: 29, exp: 18815},
    {nivel: 30, exp: 21000},
  ];
  public datosPersonaje: Dato = {nombre: '', jugador: '', experiencia: 0, nivel: {nivel: 0, exp:0}}
  constructor() { }
}
