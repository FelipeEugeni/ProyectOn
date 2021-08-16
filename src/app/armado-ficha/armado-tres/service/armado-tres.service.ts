import { Injectable } from '@angular/core';
import {Esencias} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoTresService {
  public pEsencia: number = 5;
  public prEsencias: Esencias = {
    fortaleza: 0,
    apoyo: 0,
    control: 0,
    cuerpo: 0,
    danio: 0,
    elementalismo: 0,
    invocacion: 0,
    mente: 0,
    sagacidad: 0,
  };
  constructor() { }

  public ModificarFortaleza(valor: number) {
    if (this.prEsencias.fortaleza + valor <= 2 && this.prEsencias.fortaleza + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.fortaleza = this.prEsencias.fortaleza + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarApoyo(valor: number) {
    if (this.prEsencias.apoyo + valor <= 2 && this.prEsencias.apoyo + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.apoyo = this.prEsencias.apoyo + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarControl(valor: number) {
    if (this.prEsencias.control + valor <= 2 && this.prEsencias.control + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.control = this.prEsencias.control + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarCuerpo(valor: number) {
    if (this.prEsencias.cuerpo + valor <= 2 && this.prEsencias.cuerpo + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.cuerpo = this.prEsencias.cuerpo + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarDanio(valor: number) {
    if (this.prEsencias.danio + valor <= 2 && this.prEsencias.danio + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.danio = this.prEsencias.danio + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarElementalismo(valor: number) {
    if (this.prEsencias.elementalismo + valor <= 2 && this.prEsencias.elementalismo + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.elementalismo = this.prEsencias.elementalismo + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarInvocacion(valor: number) {
    if (this.prEsencias.invocacion + valor <= 2 && this.prEsencias.invocacion + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.invocacion = this.prEsencias.invocacion + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarMente(valor: number) {
    if (this.prEsencias.mente + valor <= 2 && this.prEsencias.mente + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.mente = this.prEsencias.mente + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarSagacidad(valor: number) {
    if (this.prEsencias.sagacidad + valor <= 2 && this.prEsencias.sagacidad + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias.sagacidad = this.prEsencias.sagacidad + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
}
