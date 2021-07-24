import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  titulo:string = "Hola soy un titulo";
  dinero:number = 2400;
  ganacias:number = 0.54;
  textolargo: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur hendrerit lorem facilisis luctus. Etiam fringilla elit eros, ut ullamcorper ante eleifend et. Maecenas sagittis, magna non congue malesuada, massa elit tincidunt nisi, vitae aliquam diam urna in eros. Nunc elementum pulvinar enim, quis pellentesque ipsum varius id";
  fechaN:Date = new Date('03/27/1997')
  constructor() { }

  ngOnInit(): void {
  }

}
