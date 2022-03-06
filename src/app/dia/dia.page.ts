import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.page.html',
  styleUrls: ['./dia.page.scss'],
})
export class DiaPage {

  constructor(private router: Router) { }

  showLunchPage(id): void {
    this.router.navigate(['/comida', id]);
  }

}
