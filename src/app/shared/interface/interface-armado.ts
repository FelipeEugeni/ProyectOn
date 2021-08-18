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

export interface MagiaMenor {
  condicion: string;
  magiaMenor: string;
}

export interface Modificador {
  dado: any;
  nombre: string;
  valor: number;
}

export interface Tecnica {
  nombre: string;
  habilidades: Habilidad[];
  bonificacion: number;
}

export interface Objeto {
  nombre: string;
  descripcion: string;
  durabilidad: number;
  bonificacion: number;
  objetoId: number;
  requisitosId: number;
  clasificacionId: number;
}

export interface Material {
  nombre: string;
  durabilidad: number;
  resistencia: number;
  materialId: number;
}

export interface Dinero {
  moneda: string;
  cantidad: number;
}

export interface ObjetoCompuesto {
  item: Objeto;
  material: Material;
}

export interface Clasificacion {
  nombre: string;
  clasificacionId: number;
}
