import {Component, OnInit} from '@angular/core';
import {ArmadoTresService} from "./service/armado-tres.service";

@Component({
  selector: 'app-armado-tres',
  templateUrl: './armado-tres.component.html',
  styleUrls: ['./armado-tres.component.css']
})
export class ArmadoTresComponent implements OnInit {

  constructor(
    public armadoTresService: ArmadoTresService
  ) {
  }

  ngOnInit(): void {
  }

}

