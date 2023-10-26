import { Injectable } from '@angular/core';
import { ProductsWithApiService } from './products-with-api.service';
import { StoreInterface } from 'src/app/modeles/Iproducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apiPrd: ProductsWithApiService) {}
  getAllCategories(): Observable<number[]> {
    return this.apiPrd.getPrdIdList();
  }
}
