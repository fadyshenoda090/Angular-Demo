import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Observable, map } from 'rxjs';
import { StoreInterface } from 'src/app/modeles/Iproducts';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
http={};
update:boolean=false;
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllProducts(): Observable<StoreInterface[]> {
    // return this.httpClient.get<StoreInterface[]>('http://localhost:3000/Products');
    return this.httpClient.get<StoreInterface[]>(`${environment.APIBaseURL}/Products`);
  }
  getProductById(prdId:number): Observable<StoreInterface>{
    // return this.httpClient.get<StoreInterface>(`http://localhost:3000/Products/${prdId}`);
    return this.httpClient.get<StoreInterface>(`${environment.APIBaseURL}/Products/${prdId}`);
  }
  getProductsByCatId(catId:string): Observable<StoreInterface[]>{
    // return this.httpClient.get<StoreInterface[]>(`http://localhost:3000/Products?categoryId=${catId}`);
    return this.httpClient.get<StoreInterface[]>(`${environment.APIBaseURL}/Products?categoryId=${catId}`);
  }
  getAllCategories(): Observable<number[]>{
  return this.httpClient.get<number[]>(`${environment.APIBaseURL}/Products/`)
  }
  getPrdIdList(): Observable<number[]> {
    return this.httpClient.get<StoreInterface[]>(`${environment.APIBaseURL}/Products`).pipe(
      map(prd => prd.map(prd => prd.categoryId))
    );
  }
  
  ////////////////////////////////////////////////////////

  addNewProduct(prd: StoreInterface): Observable<StoreInterface> {
    return this.httpClient.post<StoreInterface>(
      `${environment.APIBaseURL}/Products`,
      JSON.stringify(prd),
      this.http
    );
  }
  updateProduct(prd: StoreInterface): Observable<StoreInterface> {
    return this.httpClient.put<StoreInterface>(
      `${environment.APIBaseURL}/Products/${prd.id}`,
      JSON.stringify(prd),
      this.http
    );
  }
  deleteProduct(prdId: number): Observable<StoreInterface> {
    return this.httpClient.delete<StoreInterface>(
      `${environment.APIBaseURL}/Products/${prdId}`,
      this.http
    );
  }
}
