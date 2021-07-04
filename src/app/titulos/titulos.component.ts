import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre:string = 'Celestino';
  apellido:string = 'Hernandez';
  alumno:any = {
    nombre:'Ana',
    apellido: 'Corona',
    edad:22
  }

  imagen:string = 'https://ih1.redbubble.net/image.103398123.1128/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'

  inputnuevo:string = "hola soy un nuevo input"

  correo:string = '';
  contrasena:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(evento:any){
    if(evento.key == "Enter"){
      console.log("ingresando al sistema")
    }
    console.log(this.correo)
    console.log(this.contrasena)
  }

  llamarAlert(){
    alert('Ha hecho doble click!')
  }

  escribirModelo(){
    console.log(this.contrasena);
  }

  escribircorreo(){
    console.log(this.correo);
  }

  escribir(value:any){
    console.log(value.target.value);
  }

  colorearFondo(evento:any){
    evento.srcElement.style.background = "red"
    evento.srcElement.style.width = "500px";
  }

  Cambiartamanio(evento:any){
    evento.srcElement.style.width ="200px"
    evento.srcElement.style.heigth ="150px"
    evento.srcElement.style.border ="5px solid red"
  }

  aumentartamanio(evento:any){
    evento.srcElement.style.width ="500px"
    evento.srcElement.style.heigth ="400px"
    evento.srcElement.style.border ="2px solid blue"
  }

}
