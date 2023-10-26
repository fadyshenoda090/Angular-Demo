import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreInterface } from 'src/app/modeles/Iproducts';
import { Store } from 'src/app/modeles/store';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
import { ProductsWithApiService } from '../services/products-with-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  pStore: Store = new Store(
    'Anime Store',
    ['Qena', 'Sohag', 'Giza'],
    'https://images-platform.99static.com/83gQG5FH4fWR5N81HcGmMKL_kD0=/100x94:900x894/500x500/top/smart/99designs-contests-attachments/106/106999/attachment_106999784'
  );

  showPara: boolean = false;
  showCard: boolean = true;
  clientName: string = '';
  cridetNum: number = 1234567891011123;
  ProductSelected: StoreInterface[] = [];
  searchResults: StoreInterface[] = [];

  @Input() set selectFilter(value: number) {
    this.ProductSelected = this.prdService.filter(value);
  }
  @Input() set prdId(productId: number) {
    this.ProductSelected = this.prdService.filter(productId);
  }

  @Input() set price(value: number) {
    this.ProductSelected = this.prdService.priceFilter(value);
  }
  @Output() onAddToCart: EventEmitter<StoreInterface>;

  constructor(
    private apiPrd: ProductsWithApiService,
    private prdService: ProductServiceService,
    private router: Router
  ) {
    this.onAddToCart = new EventEmitter<StoreInterface>();
    this.clientName = 'Fady';
  }

  ngOnInit(): void {
    // this.ProductSelected = this.prdService.getAllProducts();
    this.apiPrd.getAllProducts().subscribe(
      {
        next: (data) => {
          return this.ProductSelected=data
        },
        error: (err) => {
          alert(err.message);
        }
      }
    )
  }

  toggleImg() {
    this.showCard = !this.showCard;
    this.showPara = !this.showPara;
  }
  // filter(value: number): StoreInterface[] {
  //   return this.iStore.filter((prd: StoreInterface) => prd.categoryId == value);
  // }
  // priceFilter(value: number): StoreInterface[] {
  //   return this.iStore.filter((prd: StoreInterface) => prd.price==value);
  // }
  decreaseQ(prd: StoreInterface) {
    if (prd.quantity > 0) {
      prd.quantity -= 1;
    }
  }
  addToCart(prd: StoreInterface) {
    this.onAddToCart.emit(prd);
  }
  prdDetailes(prdId: number) {
    this.router.navigate(['/ProductDetails', prdId]);
  }
  
  updateProduct(prdId: number) {
    this.router.navigate(['/ProductTemplate', prdId]);
  }

  deleteProduct(prdId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    // this.router.navigate(['/ProductTemplate', prdId]);
    if (confirmDelete) {
      this.apiPrd.deleteProduct(prdId).subscribe({
      next: () => {
        alert('product deleted Successfully');
        this.router.navigate(['/Products']);
      },
      error: (err) => {
        alert('Error Occured');
        console.log(err);
      }
    })
    }else{
      alert('product not deleted');
    } 
    
  }
  

  searchWithCatId(value: string){
this.apiPrd.getProductsByCatId(value).subscribe((data=>{  
  return this.ProductSelected=this.searchResults=data;
}))
  }
}
