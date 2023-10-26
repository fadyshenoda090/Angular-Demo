import { Injectable } from '@angular/core';
import { StoreInterface } from 'src/app/modeles/Iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  iStore: StoreInterface[];
  constructor() {
    this.iStore = [
      {
        id: 1,
        name: 'fifa24',
        quantity: 5,
        price: 700,
        img: 'https://assets-prd.ignimgs.com/2023/07/10/fc24-1689029623566.jpg',
        categoryId: 4,
      },
      {
        id: 2,
        name: 'the last of us ii',
        quantity: 1,
        price: 500,
        img: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png',
        categoryId: 1,
      },
      {
        id: 3,
        name: 'warzone ii',
        quantity: 0,
        price: 1000,
        img: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ2-S01-DMZ-TACTICS-TOUT.jpg',
        categoryId: 3,
      },
      {
        id: 4,
        name: 'assetto corsa',
        quantity: 0,
        price: 700,
        img: 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/85/881733/1.jpg?5568',
        categoryId: 2,
      },
      {
        id: 5,
        name: 'apex legends',
        quantity: 7,
        price: 10000,
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1695930392',
        categoryId: 3,
      },
      {
        id: 6,
        name: 'battle field',
        quantity: 3,
        price: 700,
        img: 'https://arabhardware.net/wp-content/uploads/2018/10/923038.jpg',
        categoryId: 3,
      },
    ];
  }
  getAllProducts(): StoreInterface[] {
    return this.iStore;
  }
  // getProductsByCatId(categoryId: number): StoreInterface[] {
  //   return this.iStore.filter((product) => product.categoryId === categoryId);
  // }


  getPrdById(productId: number): StoreInterface | undefined {
    return this.iStore.find(prd=>prd.id==productId)
  }
  filter(value: number): StoreInterface[] {
    return this.iStore.filter((prd: StoreInterface) => prd.categoryId == value);
  }
  priceFilter(value: number): StoreInterface[] {
      return this.iStore.filter((prd: StoreInterface) => prd.price==value);
    }
    getPrdIdList():number[]{
      return this.iStore.map(prd=>prd.id)
    }
}
