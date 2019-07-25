import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirectivamouse]'
})
export class DirectivamouseDirective {

  constructor(private elemento: ElementRef) {
  }

  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.elemento.nativeElement.style.background = 'green';
  }

  @HostListener('mouseleave')
  publiconMouseLeave() {
    this.elemento.nativeElement.style.background = 'white';
  }
}
