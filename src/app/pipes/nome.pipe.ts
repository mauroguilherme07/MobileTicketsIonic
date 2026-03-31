import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome'
})
export class NomePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.toUpperCase(); // exemplo simples
  }

}