import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-refact-prueba',
  templateUrl: './refact-prueba.component.html',
  styleUrls: ['./refact-prueba.component.css']
})
export class RefactPruebaComponent implements OnInit {
public queryPrueba: string = '';
  constructor(
    private rout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.queryPrueba = this.rout.snapshot.queryParams.prueba;
  }

}
