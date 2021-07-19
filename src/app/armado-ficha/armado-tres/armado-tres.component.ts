import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-armado-tres',
  templateUrl: './armado-tres.component.html',
  styleUrls: ['./armado-tres.component.css']
})
export class ArmadoTresComponent implements OnInit {
  public puntosEsencia: number = 10;
  public puntosRepartidosEsencias: Esencias = {
    Fortaleza: 0,
    Apoyo: 0,
    Control: 0,
    Cuerpo: 0,
    Danio: 0,
    Elementalismo: 0,
    Invocacion: 0,
    Mente: 0,
    Sagacidad: 0,
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public ModificarFortaleza(valor: number) {
    if (this.puntosRepartidosEsencias.Fortaleza + valor <= 2 && this.puntosRepartidosEsencias.Fortaleza + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Fortaleza = this.puntosRepartidosEsencias.Fortaleza + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarApoyo(valor: number) {
    if (this.puntosRepartidosEsencias.Apoyo + valor <= 2 && this.puntosRepartidosEsencias.Apoyo + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Apoyo = this.puntosRepartidosEsencias.Apoyo + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarControl(valor: number) {
    if (this.puntosRepartidosEsencias.Control + valor <= 2 && this.puntosRepartidosEsencias.Control + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Control = this.puntosRepartidosEsencias.Control + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarCuerpo(valor: number) {
    if (this.puntosRepartidosEsencias.Cuerpo + valor <= 2 && this.puntosRepartidosEsencias.Cuerpo + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Cuerpo = this.puntosRepartidosEsencias.Cuerpo + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarDanio(valor: number) {
    if (this.puntosRepartidosEsencias.Danio + valor <= 2 && this.puntosRepartidosEsencias.Danio + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Danio = this.puntosRepartidosEsencias.Danio + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarElementalismo(valor: number) {
    if (this.puntosRepartidosEsencias.Elementalismo + valor <= 2 && this.puntosRepartidosEsencias.Elementalismo + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Elementalismo = this.puntosRepartidosEsencias.Elementalismo + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarInvocacion(valor: number) {
    if (this.puntosRepartidosEsencias.Invocacion + valor <= 2 && this.puntosRepartidosEsencias.Invocacion + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Invocacion = this.puntosRepartidosEsencias.Invocacion + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarMente(valor: number) {
    if (this.puntosRepartidosEsencias.Mente + valor <= 2 && this.puntosRepartidosEsencias.Mente + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Mente = this.puntosRepartidosEsencias.Mente + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }

  public ModificarSagacidad(valor: number) {
    if (this.puntosRepartidosEsencias.Sagacidad + valor <= 2 && this.puntosRepartidosEsencias.Sagacidad + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEsencia - valor >= 0) {
        this.puntosRepartidosEsencias.Sagacidad = this.puntosRepartidosEsencias.Sagacidad + valor;
        this.puntosEsencia = this.puntosEsencia - valor;
      }
    }
  }
}

interface Esencias {
  Fortaleza: number;
  Apoyo: number;
  Control: number;
  Cuerpo: number;
  Danio: number;
  Elementalismo: number;
  Invocacion: number;
  Mente: number;
  Sagacidad: number;
}

