import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCust]'
})
export class CustDirective implements OnInit {

  constructor(private el: ElementRef, private controls: NgControl) { }

  ngOnInit(): void {

    this.controls.statusChanges?.subscribe(() => {
      //console.log(this.controls.invalid);
      
      const isInvalid = this.controls.invalid && this.controls.touched;
console.log(isInvalid);

      if (isInvalid) {
        this.el.nativeElement.style.border = '1px solid red';
        this.el.nativeElement.style.background = '#ffe6e6';
      }
      else {
        this.el.nativeElement.style.border = '';
        this.el.nativeElement.style.background = '';
      }


    })

  }

}
