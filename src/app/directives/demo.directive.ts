import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color="red"
  }

    // Mouse enters → set yellow background
  @HostListener('load') onLoad() {
    this.el.nativeElement.style.background = 'yellow';
  }

  // @HostListener('mouseup') onMouseUp(){
  //   this.el.nativeElement.style.background="white"
  // }



}
