import {Component, OnInit,} from '@angular/core';
import {ArmadoUnoService} from "./service/armado-uno.service";

@Component({
  selector: 'app-armado-uno',
  templateUrl: './armado-uno.component.html',
  styleUrls: ['./armado-uno.component.css']
})

export class ArmadoUnoComponent implements OnInit {

  constructor(
    public armadoUnoService: ArmadoUnoService
  ) {
  }

  ngOnInit(): void {
  }


}



