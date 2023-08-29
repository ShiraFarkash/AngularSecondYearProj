import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {

  constructor( private el: ElementRef) { 
   
  }

@HostListener('mouseenter') onMousHover(){
  this.el.nativeElement.style.cursor = 'pointer';
}
}
