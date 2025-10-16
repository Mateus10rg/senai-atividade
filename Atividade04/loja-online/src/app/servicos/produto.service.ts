import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // [cite: 243]
import { Observable } from 'rxjs'; // [cite: 244]

@Injectable({
  providedIn: 'root' // [cite: 246]
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3000/produtos'; // [cite: 249]

  constructor(private http: HttpClient) { } // [cite: 250]

  // Método para buscar todos os produtos (GET)
  obterProdutos(): Observable<any[]> { // [cite: 251]
    return this.http.get<any[]>(this.apiUrl); // [cite: 252]
  }

  // Método para adicionar um novo produto (POST)
  adicionarProduto(produto: any): Observable<any> { // [cite: 256]
    return this.http.post<any>(this.apiUrl, produto); // [cite: 257]
  }

  // Método para atualizar um produto existente (PUT)
  atualizarProduto(id: number, produto: any): Observable<any> { // [cite: 259]
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto);
  }

  // Método para deletar um produto (DELETE)
  deletarProduto(id: number): Observable<any> { // [cite: 261]
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // [cite: 262]
  }
}