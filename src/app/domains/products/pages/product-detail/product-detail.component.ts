import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  @Input() id?: string;
  product = signal<Product | null>(null);

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
        }
      });
    }
  }
}
