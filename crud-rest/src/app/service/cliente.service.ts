import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  //get
  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/cliente');
  }

  //post
  inserir(cliente:Cliente){
    return this.http.post<Cliente>('http://localhost:3000/cliente', cliente);
  }

  //
  atualizar(cliente: Cliente){
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente);
  }

  excluir(id: number){
    return this.http.delete(`http://localhost:3000/cliente/${id}`);
  }
}
