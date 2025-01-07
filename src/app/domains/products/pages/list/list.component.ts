import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  
  ngOnInit(){
    this.getCategories();
  }

  ngOnchanges(changes: SimpleChanges){ 
    this.getProducts();
  }

  addtoCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);

        // products.forEach(product => {
        //   console.log(product);
        // });
      },
      error: () => {
        console.error('Se ha generado un error obteniendo los productos')
      }
    });
  }

  private getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (category) => {
        this.categories.set(category);

        // category.forEach(category => {
        //   console.log(category);
        // });
      },
      error: () => {
        console.error('Se ha generado un error obteniendo los productos')
      }
    });
  }

}
