import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

   constructor(private http: HttpClient) { }

  public getCountries() {
    console.info('buscando paises');
    return this.http.get(environment.urlPaises);
  }

}
