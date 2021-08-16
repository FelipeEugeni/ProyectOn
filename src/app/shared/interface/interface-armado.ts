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
export interface HabilidadSelect {
  titulo: string;
  nombre: string;
  skillId: number;
  statId: number;
  siglasStat: string;
  puntos: number;

}
export interface Esencias {
  fortaleza: number;
  apoyo: number;
  control: number;
  cuerpo: number;
  danio: number;
  elementalismo: number;
  invocacion: number;
  mente: number;
  sagacidad: number;
}
