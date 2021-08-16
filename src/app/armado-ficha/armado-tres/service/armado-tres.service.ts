import { Injectable } from '@angular/core';
import {Esencias} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoTresService {
  public pEsencia: number = 5;
  public prEsencias: Esencias[] = [
    {
      nombre: 'Fortaleza',
      puntos: 0,
      esenciaId: 1
    },
    {
      nombre: 'Apoyo',
      puntos: 0,
      esenciaId: 2
    },
    {
      nombre: 'Control',
      puntos: 0,
      esenciaId: 3
    },
    {
      nombre: 'Cuerpo',
      puntos: 0,
      esenciaId: 4
    },
    {
      nombre: 'Daño',
      puntos: 0,
      esenciaId: 5
    },
    {
      nombre: 'Elementalismo',
      puntos: 0,
      esenciaId: 6
    },

    {
      nombre: 'Invocacion',
      puntos: 0,
      esenciaId: 7
    },

    {
      nombre: 'Mente',
      puntos: 0,
      esenciaId: 8
    },

    {
      nombre: 'Sagacidad',
      puntos: 0,
      esenciaId: 9
    }
  ];
  constructor() { }

  public ModificarFortaleza(valor: number) {
    if (this.prEsencias[0].puntos + valor <= 2 && this.prEsencias[0].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[0].puntos = this.prEsencias[0].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarApoyo(valor: number) {
    if (this.prEsencias[1].puntos + valor <= 2 && this.prEsencias[1].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[1].puntos = this.prEsencias[1].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarControl(valor: number) {
    if (this.prEsencias[2].puntos + valor <= 2 && this.prEsencias[2].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[2].puntos = this.prEsencias[2].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarCuerpo(valor: number) {
    if (this.prEsencias[3].puntos + valor <= 2 && this.prEsencias[3].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[3].puntos = this.prEsencias[3].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarDanio(valor: number) {
    if (this.prEsencias[4].puntos + valor <= 2 && this.prEsencias[4].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[4].puntos = this.prEsencias[4].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarElementalismo(valor: number) {
    if (this.prEsencias[5].puntos + valor <= 2 && this.prEsencias[5].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[5].puntos = this.prEsencias[5].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarInvocacion(valor: number) {
    if (this.prEsencias[6].puntos + valor <= 2 && this.prEsencias[6].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[6].puntos = this.prEsencias[6].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarMente(valor: number) {
    if (this.prEsencias[7].puntos + valor <= 2 && this.prEsencias[7].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[7].puntos = this.prEsencias[7].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
  public ModificarSagacidad(valor: number) {
    if (this.prEsencias[8].puntos + valor <= 2 && this.prEsencias[8].puntos + valor >= 0) {
      if (this.pEsencia - valor <= 5 && this.pEsencia - valor >= 0) {
        this.prEsencias[8].puntos = this.prEsencias[8].puntos + valor;
        this.pEsencia = this.pEsencia - valor;
      }
    }
  }
}
