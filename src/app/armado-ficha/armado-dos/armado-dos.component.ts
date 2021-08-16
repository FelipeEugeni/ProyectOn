import {Component, OnInit} from '@angular/core';
import {ArmadoDosService} from "./service/armado-dos.service";


@Component({
  selector: 'app-armado-dos',
  templateUrl: './armado-dos.component.html',
  styleUrls: ['./armado-dos.component.css']
})
export class ArmadoDosComponent implements OnInit {

  constructor(
    public armadoDosService: ArmadoDosService
  ) {
  }

  ngOnInit(): void {

  }

}
