import {Component, OnInit} from '@angular/core';
import {InventarioService} from "./service/inventario.service";
import {Clasificacion, Material, Objeto, ObjetoCompuesto} from "../../../../shared/interface/interface-armado";

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  public tipoId: number = 0;
  public objetoId: number = 0;
  public materialId: number = 0;
  public tituloSelec: string[] = ['Elige Un Objeto', 'Elige Un Escudo', 'Elige Un Arma', 'Elige Un Arma', 'Elige Una Armadura']
  public tipoDeObjeto: Clasificacion[];
  public objetos: Objeto[];
  public materiales: Material[];
  public cargarObjeto: ObjetoCompuesto = {
    item:
      {objetoId: 0, bonificacion: 0, clasificacionId: 0, requisitosId: 0, descripcion: '', durabilidad: 0, nombre: ''},
    material:
      {materialId: 0, resistencia: 0, durabilidad: 0, nombre: ''}
  };

  constructor(
    public inventarioService: InventarioService
  ) {
  }

  ngOnInit(): void {
    this.tipoDeObjeto = this.inventarioService.tiposDeObjetos;
    this.materiales = this.inventarioService.materialesInventario;
  }

  public selecTipo(id: number) {
    if (id != 0) {
      this.objetos = this.inventarioService.objetos.filter(item => item.clasificacionId == id);
    } else {
      this.tipoId = 0;
      this.objetos = [];
    }
  }

  public crearObjeto(i: number, ii: number) {
    this.cargarObjeto.item = this.objetos[i];
    this.cargarObjeto.material = this.materiales[ii];
  }

  public agregarAlInventario(): void {
    this.inventarioService.inventarioHeroe.push(this.cargarObjeto);
    this.cargarObjeto = {
      item:
        {
          objetoId: 0,
          bonificacion: 0,
          clasificacionId: 0,
          requisitosId: 0,
          descripcion: '',
          durabilidad: 0,
          nombre: ''
        },
      material:
        {materialId: 0, resistencia: 0, durabilidad: 0, nombre: ''}
    };
  }
}
