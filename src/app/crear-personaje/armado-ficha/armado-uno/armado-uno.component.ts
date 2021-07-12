import { Component, OnInit,} from '@angular/core';
import {formatNumber} from "@angular/common";
import {HabilidadesSelectComponent} from "./habilidades-select/habilidades-select.component";

@Component({
  selector: 'app-armado-uno',
  templateUrl: './armado-uno.component.html',
  styleUrls: ['./armado-uno.component.css']
})

export class ArmadoUnoComponent implements OnInit {

  public puntosEstadisticas: number = 10;
  public puntosRepartidosEstadisticas: Estadisticas = {
    Arcanismo: 0,
    Astucia: 0,
    Carisma: 0,
    Destreza: 0,
    Fuerza: 0,
    Inteligencia: 0,
    Resistencia: 0,
    Sabiduria: 0,
    Voluntad: 0
  }
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

  public ModificarArcanismo(valor: number) {
    if (this.puntosRepartidosEstadisticas.Arcanismo + valor <= 2 && this.puntosRepartidosEstadisticas.Arcanismo + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Arcanismo = this.puntosRepartidosEstadisticas.Arcanismo + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarAstucia(valor: number) {
    if (this.puntosRepartidosEstadisticas.Astucia + valor <= 2 && this.puntosRepartidosEstadisticas.Astucia + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Astucia = this.puntosRepartidosEstadisticas.Astucia + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarCarisma(valor: number) {
    if (this.puntosRepartidosEstadisticas.Carisma + valor <= 2 && this.puntosRepartidosEstadisticas.Carisma + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Carisma = this.puntosRepartidosEstadisticas.Carisma + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarDestreza(valor: number) {
    if (this.puntosRepartidosEstadisticas.Destreza + valor <= 2 && this.puntosRepartidosEstadisticas.Destreza + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Destreza = this.puntosRepartidosEstadisticas.Destreza + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarFuerza(valor: number) {
    if (this.puntosRepartidosEstadisticas.Fuerza + valor <= 2 && this.puntosRepartidosEstadisticas.Fuerza + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Fuerza = this.puntosRepartidosEstadisticas.Fuerza + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarInteligencia(valor: number) {
    if (this.puntosRepartidosEstadisticas.Inteligencia + valor <= 2 && this.puntosRepartidosEstadisticas.Inteligencia + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Inteligencia = this.puntosRepartidosEstadisticas.Inteligencia + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarResistencia(valor: number) {
    if (this.puntosRepartidosEstadisticas.Resistencia + valor <= 2 && this.puntosRepartidosEstadisticas.Resistencia + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Resistencia = this.puntosRepartidosEstadisticas.Resistencia + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarSabiduria(valor: number) {
    if (this.puntosRepartidosEstadisticas.Sabiduria + valor <= 2 && this.puntosRepartidosEstadisticas.Sabiduria + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Sabiduria = this.puntosRepartidosEstadisticas.Sabiduria + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarVoluntad(valor: number) {
    if (this.puntosRepartidosEstadisticas.Voluntad + valor <= 2 && this.puntosRepartidosEstadisticas.Voluntad + valor >= 0) {
      if (this.puntosEstadisticas - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
        this.puntosRepartidosEstadisticas.Voluntad = this.puntosRepartidosEstadisticas.Voluntad + valor;
        this.puntosEstadisticas = this.puntosEstadisticas - valor;
      }
    }
  }

  public ModificarFortaleza(valor: number) {
    if (this.puntosRepartidosEsencias.Fortaleza + valor <= 2 && this.puntosRepartidosEsencias.Fortaleza + valor >= 0) {
      if (this.puntosEsencia - valor <= 10 && this.puntosEstadisticas - valor >= 0) {
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


interface Estadisticas {
  Arcanismo: number;
  Astucia: number;
  Carisma: number;
  Destreza: number;
  Fuerza: number;
  Inteligencia: number;
  Resistencia: number;
  Sabiduria: number;
  Voluntad: number;
}
interface  Esencias {
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


