import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  
  ngOnInit(){
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        console.error('Se ha generado un error obteniendo los productos')
      }
    });
  }

  addtoCart(product: Product){
    this.cartService.addToCart(product);
  }
}
