import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0])
          }
        }
      });
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCard(){
    const product = this.product();
    if(product){
      this.cartService.addToCart(product);
    }
  }


}
