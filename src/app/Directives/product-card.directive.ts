import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective implements OnChanges {
@Input('productCard') color:string = 'violet';
@Input () color2:string = 'green';
@Input() size:string = '5';
  constructor(public elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.boxShadow = '1px 0px 10px lightgrey';
    // this.elementRef.nativeElement.style.borderRadius = '20px';
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.boxShadow = '1px 0px 10px 5px lightgrey';
    this.elementRef.nativeElement.style.borderRadius = '20px';
  }
  @HostListener('mouseover')increseBorder(){
    this.elementRef.nativeElement.style.boxShadow = `1px 0px 20px 15px ${this.color2}`;
    this.elementRef.nativeElement.style.transform = `translate(0, ${this.size}px)`;
  }
  @HostListener('mouseout')originalBorder(){
    this.elementRef.nativeElement.style.boxShadow = `1px 0px 10px 5px lightgrey`;
    this.elementRef.nativeElement.style.transform = 'none';
  }

}
