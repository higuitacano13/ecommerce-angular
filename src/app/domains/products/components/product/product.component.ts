import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe'
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe'
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;
  @Output() addToCard = new EventEmitter();

  addToCardHandler(){
    console.log('On click event actived!')
    this.addToCard.emit(this.product);
  }
}
