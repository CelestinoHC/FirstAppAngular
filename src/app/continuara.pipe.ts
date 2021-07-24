import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {

    if (valor.toString().length > 170){
      valor = valor.substring(0,170)
    }
    valor += " Continuara..."
    return valor;
  }

}
