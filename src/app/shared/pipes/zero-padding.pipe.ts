import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {

  transform(value: number): string {
    if (value.toString.length < 3) {
      const result = '000_' + value + '_000';
      return result;
    }
  }
}
