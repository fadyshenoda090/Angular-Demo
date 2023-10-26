import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreInterface } from 'src/app/modeles/Iproducts';
import { ProductsWithApiService } from '../services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prdId:number=0;
  product:StoreInterface|undefined=undefined;
  idsList:number[]=[];
  index:number=0;
constructor(private apiPrd:ProductsWithApiService,private prdService:ProductServiceService,private activatedRoute: ActivatedRoute,private router:Router){

}
ngOnInit(): void {
  ////this.idsList=this.prdService.getPrdIdList();
  // this.prdId=(this.activatedRoute.snapshot.paramMap.get('id'))?Number(this.activatedRoute.snapshot.paramMap.get('id')):0
  // this.product=this.prdService.getPrdById(this.prdId);
  ////this.activatedRoute.paramMap.subscribe(param=>{
    ////this.prdId=(param.get('id'))?Number(param.get('id')):0;
    // let foundPrd=this.prdService.getPrdById(this.prdId);
    // if(foundPrd){
    //   this.product=foundPrd;
    // }else{
    //   alert("this product does not exist")
    //   this.router.navigate(['/Products']);
    // }
  ////})
 //// this.apiPrd.getProductById(this.prdId).subscribe(
    ////{
      ////next:(data)=>{
      ////  this.product=data;
      ////  // console.log(data);
      ////  
      ////},
      ////error:(err)=>{
      ////  alert('something went wrong '+err.message);
      ////}
    ////})
    this.idsList = this.prdService.getPrdIdList();
  this.activatedRoute.paramMap.subscribe(param => {
    const id = param.get('id');
    if (id) {
      this.prdId = Number(id);
      this.apiPrd.getProductById(this.prdId).subscribe(
        (data) => {
          this.product = data;
        },
        (err) => {
          alert('Something went wrong: ' + err.message);
          this.router.navigate(['/Products']);
        }
      );
    } else {
      alert('Invalid product ID');
      this.router.navigate(['/Products']);
    }
  });
}
next(){
  this.index=this.idsList.indexOf(this.prdId);
  if(this.index<this.idsList.length-1){
this.router.navigate(['/ProductDetails',this.idsList[++this.index]])
}
}
previous() {
  this.index = this.idsList.indexOf(this.prdId);
  if (this.index > 0) {
    this.router.navigate(['/ProductDetails', this.idsList[--this.index]]);
  }
}
back(){
this.router.navigate(['/Products'])
}
}
