import { Component, OnInit } from '@angular/core';

interface Productos{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVenci:Date;
  esImportante:boolean
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  cargando: boolean = true;
  nombres:Array<string> = ["Ana", "Juan", "Maria", "Celestino"];
  pestana:string = '';
  mostrarCuadrago:boolean = true;

  productos:Array<Productos> = [
    {
      nombre: "Arroz",
      stock: 15,
      fabricante: "Distribuidor de arroz",
      fechaVenci: new Date('08/18/2021'),
      esImportante: false
    },
    {
      nombre: "Cloralex",
      stock: 2,
      fabricante: "Distribuidor de cloralex",
      fechaVenci: new Date('07/18/2022'),
      esImportante: true
    },
    {
      nombre: "Frituras",
      stock: 25,
      fabricante: "Sabritas",
      fechaVenci: new Date('12/25/2021'),
      esImportante: false
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  mostrarCargando(){
    this.cargando = true;
  }

  alternarCargando(){
    this.cargando = !this.cargando;
  }

  cambiarPestana(pestana:string){
    this.pestana=pestana;
  }

  alternarFondo(){
    this.mostrarCuadrago = !this.mostrarCuadrago
  }
}
