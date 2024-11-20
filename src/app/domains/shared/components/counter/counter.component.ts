import { Component, Input, SimpleChange } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = ''

  // -- Ciclo de vida de los componentes -- //
  
  constructor(){
    // -> Async methods are not allowed
    // -> It render before the pages! Note: Only one time
    console.log('Constructor!');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChange){
    // -> It render before and during the pages!
    console.log('ngOnChanges!');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    // -> after render. Note: Only one time!
    // -> async, then, subs
    console.log('ngOnInit!');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit(){
    // -> after render. Note: Allow to know if the children component were render!
    // -> async, then, subs
    console.log('ngAfterViewInit!');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    // -> Allow to know if the child component was render!
    console.log('ngOnDestroy!');
    console.log('-'.repeat(10));
  }

}
