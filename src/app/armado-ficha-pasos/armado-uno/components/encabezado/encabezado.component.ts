import {Component, OnInit} from '@angular/core';
import {ArmadoUnoService} from "../../service/armado-uno.service";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(
    public armadoUnoService: ArmadoUnoService,
  ) {
  }

  ngOnInit(): void {

  }

}
