import { Component, Input, signal, SimpleChanges } from '@angular/core';
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
  counter = signal(0);
  counterRef: number | undefined;
  

  // -- Ciclo de vida de los componentes -- //

  constructor(){
    // -> Async methods are not allowed
    // -> It render before the pages! Note: Only one time
    console.log('Constructor!');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // -> It render before and during the pages!
    console.log('ngOnChanges!');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    // -> after render. Note: Only one time!
    // -> async, then, subs
    console.log('ngOnInit!');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);

    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval')
    //   this.counter.update(statePrev => statePrev + 1);
    // },1000);
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

    // -> Destroy task
    //window.clearInterval(this.counterRef);
  }

  doSomething(){
    console.log('change duration')
  }

}
