export interface Dato {
  nombre: string;
  jugador: string;
  nivel: Nivel;
  experiencia: number;
}
export interface Nivel {
  nivel: number;
  exp: number;
}
export interface Estadistica {
  nombre: string;
  puntos: number;
  statId: number;
}
export interface Habilidad {
  titulo: string;
  nombre: string;
  skillId: number;
  statId: number;
  siglasStat: string;
  puntos: number;

}
export interface Esencias {
  nombre: string;
  puntos: number;
  esenciaId: number;
}
export interface Magia {
  titulo: string;
  nombre: string;
  skillId: number;
  esenciaId: number;
  siglasEsencia: string;
  puntos: number;
}
