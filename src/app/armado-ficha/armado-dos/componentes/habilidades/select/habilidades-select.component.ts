import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Estadistica, HabilidadSelect} from "../../../../../shared/interface/interface-armado";
import {HabilidadesSelectService} from "./service/habilidades-select.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {HabilidadesServiceService} from "../service/habilidades-service.service";

@Component({
  selector: 'app-habilidades-select',
  templateUrl: './habilidades-select.component.html',
  styleUrls: ['./habilidades-select.component.css']
})
export class HabilidadesSelectComponent implements OnInit {
  @ViewChild('crearSelect') tampleat: ElementRef;
  public container: NgbModalRef;
  public estadisticasid: Estadistica[];
  public estadisticaCarga: number = 0;
  public habilidadesid: HabilidadSelect[];
  public habilidadCarga: number = 0;

  constructor(
    public modal: NgbModal,
    public habilidadesSelecService: HabilidadesSelectService,
    public habilidadesService: HabilidadesServiceService
  ) {

  }

  ngOnInit(): void {
  }

  public selectHabilidades(id: number): void {
    this.habilidadesid = this.habilidadesSelecService.getHabilidades().filter(item => item.statId == id)
  }


  public cargaHabilidades(id: number):void {
    if (id != 0) {
      let bulleano: boolean = true;
      for (let i = 0; i < this.habilidadesService.habilidadesHereo.length; i++) {
        if (this.habilidadesid.filter(item => item.skillId == id)[0] === this.habilidadesService.habilidadesHereo[i]) {
          alert('Ya tienes Esta Habilidad')
          bulleano = false
        }
      }
      if (bulleano === true) {
        this.habilidadesService.habilidadesHereo.push(this.habilidadesid.filter(item => item.skillId == id)[0]);
      }
    }
  }


  public agregarSelec(selecEstado: HabilidadSelect): void {
    this.estadisticasid = this.habilidadesSelecService.getEstadisticas().filter(item => item.puntos >= 1)
    if (selecEstado == null) {
      this.habilidadesid = [];
      this.estadisticaCarga = 0;
      this.habilidadCarga = 0;
      this.container = this.modal.open(this.tampleat, {size: "lg"})
    }
  }

  public cerrarModal(): void {
    if (this.container === null) {
      return;
    }
    this.container.close();
    this.container = null;
  }
}
