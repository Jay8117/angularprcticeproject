import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curency'
})
export class CurencyPipe implements PipeTransform {

  transform(value: any, rates:number=85): unknown {
    return (value * rates).toFixed(2);
  }

}
