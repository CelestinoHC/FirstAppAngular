import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../Models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo:Articulo;
  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.articulo = JSON.parse(this.rutaActiva.snapshot.params.articulo);
  }

}
