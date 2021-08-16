import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {CrearTecnicaService} from "../service/crear-tecnica.service";
import {Estadistica, Habilidad, Tecnica} from "../../../../shared/interface/interface-armado";
import {HabilidadesHeroeService} from "../../../armado-dos/componentes/habilidades/habilidades-heroe/service/habilidades-heroe.service";
import {HabilidadesSelectService} from "../../../armado-dos/componentes/habilidades/habilidades-select/service/habilidades-select.service";

@Component({
  selector: 'app-crear-tecnica',
  templateUrl: './crear-tecnica.component.html',
  styleUrls: ['./crear-tecnica.component.css']
})
export class CrearTecnicaComponent implements OnInit {
  @ViewChild('CrearTecnica') tampleat: ElementRef;
  public container: NgbModalRef;
  public datoTecnica: Tecnica = {nombre: '', habilidades: [], bonificacion: 0};
  public habilidadCarga: number = 0;
  public estadisticaCarga: number = 0;
  public habilidadesid: Habilidad[];
  public habilidadesHereo: Habilidad[];
  public estadisticasid: Estadistica[];

  constructor(
    public modal: NgbModal,
    public crearTecnicaService: CrearTecnicaService,
    public habilidadesHereoService: HabilidadesHeroeService,
    public habilidadesSelecService: HabilidadesSelectService
  ) {
  }

  ngOnInit(): void {
    this.habilidadesHereo = this.habilidadesHereoService.habilidadesHereo
  }

  public selectHabilidades(id: number): void {
    this.habilidadesid = this.habilidadesHereo.filter(item => item.statId == id)
  }

  public abrirModal(valor: number): void {
    this.estadisticasid = this.habilidadesSelecService.getEstadisticas().filter(item => item.puntos >= 1)
    if (valor === null) {
      this.datoTecnica = {nombre: '', habilidades: [], bonificacion: 0}
      this.container = this.modal.open(this.tampleat, {size: "lg"})
    }
  }
  public verificarHabilidades(id: number):void {
    if (id != 0) {
      let bulleano: boolean = true;
      for (let i = 0; i < this.datoTecnica.habilidades.length; i++) {
        if (this.habilidadesid.filter(item => item.skillId == id)[0] === this.datoTecnica.habilidades[i]) {
          alert('Ya tienes Esta Habilidad')
          bulleano = false
        }
      }
      if (bulleano === true) {
        this.datoTecnica.habilidades.push(this.habilidadesid.filter(item => item.skillId == id)[0]);
      }
    }
  }
public verificacionCarga(id: number): void {
    console.log(id)
  if (id != 0) {
    let bulleano: boolean = true;
    for (let i = 0; i < this.datoTecnica.habilidades.length; i++) {
      if (this.datoTecnica.habilidades.filter(item => item.statId == id)[0].statId != this.datoTecnica.habilidades[i].statId) {
           bulleano = false;
      }
    }
    if (this.datoTecnica.nombre === ''){
      alert('Introdusca Nombre de la Tecnica')
     bulleano = null;
    }
    if (this.datoTecnica.bonificacion === 0){
      alert('Elija Su Bonificacion')
      bulleano = null;
    }
    if (this.datoTecnica.habilidades === []){
      alert('Las Tecnicas Potencias Tus Habilidades, No te Olvides de eleguir al menos una!!!')
      bulleano = null;
    }
    if (bulleano === false) {
      alert('Solo Se Puede Bonificar las Habilidades de una Estadistica')
      console.log(this.datoTecnica.habilidades)
      this.datoTecnica = {nombre: '', habilidades: [], bonificacion: 0};
    }
    if (bulleano === true){
      this.crearTecnicaHereo()
    }
  }
}
  public crearTecnicaHereo(): void {
    this.crearTecnicaService.tecnicasHereo.push(this.datoTecnica);
    console.log(this.crearTecnicaService.tecnicasHereo)
    this.cerrarModal()
  }

  public cerrarModal(): void {
    if (this.container === null) {
      return;
    }
    this.container.close();
    this.container = null;
  }
}
