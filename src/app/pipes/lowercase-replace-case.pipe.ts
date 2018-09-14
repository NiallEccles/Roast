import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseReplaceCase'
})
export class LowercaseReplaceCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const lowerCaseReplace = value.toLowerCase();
    return lowerCaseReplace.split(' ').join('_');
  }

}
