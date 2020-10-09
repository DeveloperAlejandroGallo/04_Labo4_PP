import { Component, OnInit } from '@angular/core';
import { Pais } from '../../clases/pais';
import { PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-pais-listado',
  templateUrl: './pais-listado.component.html',
  styleUrls: ['./pais-listado.component.scss']
})
export class PaisListadoComponent implements OnInit {

  constructor(private servPaises: PaisesService) { }
  ngOnInit(): void {
    this.fillCountries();
  }

  listadoPaises: Array<Pais>;

  public fillCountries() {
    this.servPaises.getCountries().subscribe((countries: Array<Pais>) => {
      console.log(countries);
      this.listadoPaises = countries;
    }, error => {
      console.error("Error al querer leer los paises.");
    });
  }
}

