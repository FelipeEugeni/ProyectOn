import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HistoriaService} from "./service/historia.service";

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(
    public historiaService: HistoriaService
  ) {
  }

  ngOnInit(): void {
  }

}
