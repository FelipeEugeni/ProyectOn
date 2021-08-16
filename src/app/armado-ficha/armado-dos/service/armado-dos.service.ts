import {Injectable} from '@angular/core';
import {Estadistica} from "../../../shared/interface/interface-armado";

@Injectable({
  providedIn: 'root'
})
export class ArmadoDosService {
  public pEstadisticas: number = 10;
  public prEtadisticas: Estadistica[] = [
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
  ];

  constructor() {
  }

  public ModificarArcanismo(valor: number) {
    if (this.prEtadisticas[0].puntos + valor <= 2 && this.prEtadisticas[0].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[0].puntos = this.prEtadisticas[0].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarAstucia(valor: number) {
    if (this.prEtadisticas[1].puntos + valor <= 2 && this.prEtadisticas[1].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[1].puntos = this.prEtadisticas[1].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarCarisma(valor: number) {
    if (this.prEtadisticas[2].puntos + valor <= 2 && this.prEtadisticas[2].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[2].puntos = this.prEtadisticas[2].puntos+ valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarDestreza(valor: number) {
    if (this.prEtadisticas[3].puntos + valor <= 2 && this.prEtadisticas[3].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[3].puntos = this.prEtadisticas[3].puntos+ valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarFuerza(valor: number) {
    if (this.prEtadisticas[4].puntos + valor <= 2 && this.prEtadisticas[4].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[4].puntos = this.prEtadisticas[4].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarInteligencia(valor: number) {
    if (this.prEtadisticas[5].puntos + valor <= 2 && this.prEtadisticas[5].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[5].puntos = this.prEtadisticas[5].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }
  public ModificarResistencia(valor: number) {
    if (this.prEtadisticas[6].puntos + valor <= 2 && this.prEtadisticas[6].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[6].puntos = this.prEtadisticas[6].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarSabiduria(valor: number) {
    if (this.prEtadisticas[7].puntos + valor <= 2 && this.prEtadisticas[7].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[7].puntos = this.prEtadisticas[7].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }

  public ModificarVoluntad(valor: number) {
    if (this.prEtadisticas[8].puntos + valor <= 2 && this.prEtadisticas[8].puntos + valor >= 0) {
      if (this.pEstadisticas - valor <= 10 && this.pEstadisticas - valor >= 0) {
        this.prEtadisticas[8].puntos = this.prEtadisticas[8].puntos + valor;
        this.pEstadisticas = this.pEstadisticas - valor;
      }
    }
  }
}
