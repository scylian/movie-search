// TruncatePipe created to truncate strings that are too long

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // the function takes in the passed in string and truncates to a length
  // according to the arguments sent in along with the call,
  // or a default length if no arguments are sent
  transform(value: string, arg1: any, arg2: string) : string {
    // set the limit length to the first argument passed in after using
    // parseInt() in case the argument is a string
    // set limit length to default 10 if there are no arguments at all
    let limit = arg1 ? parseInt(arg1, 10) : 10;
    // set ending trail to second argument passed in
    // or set trail to default ellipses if no second argument is present
    let trail = arg2 ? arg2 : '...';
    
    // return truncated string only if original string is greater than limit
    // else return original string
    return value.length > limit ? (value.substring(0, limit) + trail) : value;
  }

}
