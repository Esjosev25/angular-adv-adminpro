import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output('valor') changeValue: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  changeProgreso(value: number) {
    const progreso = this.progreso + value;

    if (progreso <= 100 && progreso >= 0) {
      this.progreso = progreso;
      this.changeValue.emit(this.progreso);
    }
  }
  onChange(newvalue: number) {
    if (newvalue >= 100) {
      this.progreso = 100;
    } else if (newvalue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newvalue;
    }
    this.changeValue.emit(this.progreso);
  }
}
