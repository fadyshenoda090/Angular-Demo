import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  prdIdList: number[] = [];
  
  constructor(private catList:CategoryService){}
  ngOnInit():void{
    this.catList.getAllCategories().subscribe({
      next:value=>{
        this.prdIdList=value;
        // console.log(value);
        
      },
      error:err=>{
        alert('something went wrong '+err.message);
      }
    })
  }

}
