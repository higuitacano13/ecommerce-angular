import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img: string = '';
  @Input({required:true}) price: number = 0;
  @Input({required:true}) title: string = '';

  @Output() addToCard = new EventEmitter();

  addToCardHandler(){
    console.log('On click event actived!')
    this.addToCard.emit('Mensaje enviado desde el componente hijo ' + this.title);
  }
}
