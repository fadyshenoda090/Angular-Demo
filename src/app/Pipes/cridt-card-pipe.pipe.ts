import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cridtCardPipe'
})
export class CridtCardPipePipe implements PipeTransform {

  transform(creditNum: number): string {
    const digitsOnly = creditNum.toString().replace(/\D/g, '');

  const formattedNumber = digitsOnly.replace(/(\d{4})/g, '$1-');

  
  return formattedNumber.replace(/-$/, '');
  }
}
