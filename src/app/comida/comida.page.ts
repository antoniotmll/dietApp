import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../api/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage {

  listaComida: any[];

  constructor(private comida: ComidaService) {
    this.listaComida = comida.getComida();
   }
   
}
