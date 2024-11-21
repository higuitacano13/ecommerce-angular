import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from "../../../shared/components/header/header.component";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  products = signal<Product[]>([]);
  cartList = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 200,
        image: 'https://picsum.photos/640/640?r=13',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 500,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 130,
        image: 'https://picsum.photos/640/640?r=15',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 400,
        image: 'https://picsum.photos/640/640?r=16',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 800,
        image: 'https://picsum.photos/640/640?r=1',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }

  addtoCart(product: Product){
    this.cartList.update(prevState => [...prevState, product])
  }
}
