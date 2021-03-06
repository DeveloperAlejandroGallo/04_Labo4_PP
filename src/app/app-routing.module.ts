import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {ErrorComponent} from './componentes/error/error.component';
import {BienvenidoComponent} from './componentes/bienvenido/bienvenido.component';
import {BusquedaComponent} from './componentes/busqueda/busqueda.component';
import {PeliculaAltaComponent} from './componentes/pelicula-alta/pelicula-alta.component';
import {ActorAltaComponent} from './componentes/actor-alta/actor-alta.component';
import {PeliculasComponent} from './componentes/peliculas/peliculas.component';
import {ActorComponent} from './componentes/actor/actor.component';
import { PaisComponent } from './componentes/pais/pais.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'bienvenido' , component : BienvenidoComponent , data: {animation: 'bienvenido'}},
  {path: 'busqueda' , component : BusquedaComponent, data: {animation: 'busqueda'}},
  {path: 'peliculas/listado' , component : PeliculasComponent, data: {animation: 'peliculas'} },
  {path: 'peliculas/alta' , component : PeliculaAltaComponent},
  {path: 'actor/listado' , component : ActorComponent , data: {animation: 'actores'} },
  {path: 'actor/alta' , component : ActorAltaComponent },
  {path: 'error', component : ErrorComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'pais', component: PaisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
