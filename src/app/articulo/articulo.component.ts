import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../Models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push({
      nombre: "tv 24 in",
      descripcion: "televisor chido",
      precio: 2500,
      stock: 5,
      preioMayorista: 1500
    },
      {
        nombre: "laptop gamer",
        descripcion: "laptop bien rota",
        precio: 18000,
        stock: 10,
        preioMayorista: 15000
      },
      {
        nombre: "iphone X",
        descripcion: "clasico iphone",
        precio: 25000,
        stock: 15,
        preioMayorista: 18000
      }
    )
  }

  pasarParametro(articulorecibido: Articulo) {
    this.ruta.navigate(['articuloDetalle', { articulo: JSON.stringify(articulorecibido) }])
  }

}
