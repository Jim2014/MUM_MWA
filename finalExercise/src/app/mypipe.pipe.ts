import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
     let ret=[];
     if(!value) return value;

    for(let post of value){
      if(post.title.includes(args))
        ret.push(post);
    }
    return ret;
  }

}
