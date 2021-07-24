import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {
    path:'pipes', component: PipesComponent
  },
  {
    path:'ejemplo', component:EjemploComponent
  },
  {
    path:'directivas', component:DirectivaComponent
  },
  {
    path:'usuarios', component:UsuarioComponent, children: [
      {
        path:'agregar', component:AgregarUsuarioComponent
      },
      {
        path:'editar', component:EditarUsuarioComponent
      }
    ]
  },
  {
    path:'articulo', component:ArticuloComponent
  },
  {
    path:'articuloDetalle', component:ArticuloDetalleComponent
  },
  {
    path:'**', component:Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
