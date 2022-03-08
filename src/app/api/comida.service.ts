import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComidaService {

  constructor() { }
  
  private comida: {
    id: string,
    nombre: string,
    ingredientes: string
  };

  getComida() {
    return this.comida;
  }
}
