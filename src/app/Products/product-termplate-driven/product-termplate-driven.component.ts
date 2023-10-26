import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsWithApiService } from 'src/app/Components/services/products-with-api.service';
import { StoreInterface } from 'src/app/modeles/Iproducts';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-product-termplate-driven',
  templateUrl: './product-termplate-driven.component.html',
  styleUrls: ['./product-termplate-driven.component.css'],
})
export class ProductTermplateDrivenComponent {
  update: boolean = false;
  product: StoreInterface = {} as StoreInterface;
  selectedFileName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiPrd: ProductsWithApiService,
    private router: Router,
    private http:HttpClient,
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        const productId = Number(id);
        this.loadProduct(productId);
      }
    });
  }
  uploadImage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files?.length) {
      this.selectedFileName = inputElement.files[0].name;
    }
  }
  // uploadImage(event: Event) {
  //   debugger;
  //   const file=event.currentTarget.files[0];
  //   const formObj = new FormData();
  //   formObj.append('file', file);
  //   this.http.post(`${environment.APIBaseURL}/upload`,formObj).subscribe((res:any)=>{
  //     console.log(res);
  //   })
  // }
  loadProduct(productId: number) {
    this.apiPrd.getProductById(productId).subscribe({
      next: (data) => {
        this.product = data;
        this.update = true;
      },
      error: (err) => {
        alert('Something went wrong: ' + err.message);
        this.router.navigate(['/Products']);
      },
    });
  }

  addNewProduct() {
    this.apiPrd.addNewProduct(this.product).subscribe({
      next: () => {
        alert('Product Added Successfully');
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        alert('Error Occurred');
        console.log(err);
      },
    });
  }
  updateProduct() {
    this.apiPrd.updateProduct(this.product).subscribe({
      next: () => {
        alert('Product Updated Successfully');
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        alert('Error Occurred');
        console.log(err);
      },
    });
  }
}
