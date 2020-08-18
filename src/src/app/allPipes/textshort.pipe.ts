import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textshort'
})
export class TextshortPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(!value)
    return null;
    return value.substr(0, 60) + '...';
  }

}


