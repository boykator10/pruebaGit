import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volcan } from '../Entidad/Volcan';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:9091/api/Volcan/'

  listarC(){
    return this.http.get<Volcan[]>(this.url + 'listar');
  }

  guardarC(volcan : Volcan){
    return this.http.post<Volcan[]>(this.url + 'guardar' , volcan);
  }

  buscarC(volcan : Volcan){
    return this.http.post<Volcan>(this.url + 'buscar' , volcan);
  }

  editarC(volcan : Volcan){
    return this.http.post<Volcan>(this.url + 'editar' , volcan);
  }

  eliminarC(volcan : Volcan){
    return this.http.post<Volcan>(this.url + 'eliminar' , volcan);
  }
}
