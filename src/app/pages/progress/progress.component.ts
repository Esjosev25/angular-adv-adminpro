import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  constructor() {}

  progreso: number = 50;

  get getProgreso() {
    return `${this.progreso}%`;
  }

  changeProgreso(valor: number) {
    const progreso = this.progreso + valor;
    if (progreso >= 0 && progreso <= 100) {
      this.progreso = progreso;
    }
  }
}
