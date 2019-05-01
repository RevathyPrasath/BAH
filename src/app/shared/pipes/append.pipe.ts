import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: String, args?: any): String {
    let newStr= "Ms."+value;
    return newStr;
  }

}
