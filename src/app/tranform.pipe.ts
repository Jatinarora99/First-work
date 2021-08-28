import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranform'
})
export class TranformPipe implements PipeTransform {

  transform(val: number): string {
    if(val>=2){
      return 'All time Great Performer ' + val
    }
    else{
      return 'Average Performer ' + val
    }
  }

}

