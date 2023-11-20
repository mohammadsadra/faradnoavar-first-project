import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    items = items.filter(item => item.documentType.toLowerCase().includes(filter.toLowerCase()));
    return items;
  }

}
