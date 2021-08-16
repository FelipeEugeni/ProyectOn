import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Esencias, Magia} from "../../../../shared/interface/interface-armado";
import {MagiasSelectService} from "./service/magias-select.service";
import {MagiasService} from "../service/magias.service";

@Component({
  selector: 'app-selector-magias',
  templateUrl: './selector-magias.component.html',
  styleUrls: ['./selector-magias.component.css']
})
export class SelectorMagiasComponent implements OnInit {
  @ViewChild('crearSelect') tampleat: ElementRef;
  public container: NgbModalRef;
  public esenciaid: Esencias[];
  public esenciaCarga: number = 0;
  public magiaid: Magia[];
  public magiaCarga: number = 0;

  constructor(
    public modal: NgbModal,
    public magiasSelecService: MagiasSelectService,
    public magiasService: MagiasService
  ) {

  }

  ngOnInit(): void {
  }

  public selectMagias(id: number): void {
    this.magiaid = this.magiasSelecService.getMagias().filter(item => item.esenciaId == id)
  }


  public cargaMagias(id: number):void {
    if (id != 0) {
      let bulleano: boolean = true;
      for (let i = 0; i < this.magiasService.magiasHereo.length; i++) {
        if (this.magiaid.filter(item => item.skillId == id)[0] === this.magiasService.magiasHereo[i]) {
          alert('Ya tienes Esta Habilidad')
          bulleano = false
        }
      }
      if (bulleano === true) {
        this.magiasService.magiasHereo.push(this.magiaid.filter(item => item.skillId == id)[0]);
      }
    }
  }


  public agregarSelecMagia(selecEstado: Magia): void {
    this.esenciaid = this.magiasSelecService.getEsencias().filter(item => item.puntos >= 1)
    if (selecEstado == null) {
      this.magiaid = [];
      this.esenciaCarga = 0;
      this.magiaCarga = 0;
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
