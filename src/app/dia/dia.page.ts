import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ComidaService } from '../api/comida.service';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.page.html',
  styleUrls: ['./dia.page.scss'],
})

export class DiaPage implements OnInit{

  listaComida: any[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute){
                
              }

  showLunchPage(id): void {
    this.router.navigate(['/comida', id]);
  }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getComida(id): any {
    return this.listaComida[id];
  }
}
