import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public active: boolean = false;

  ngOnInit(): void {
    setInterval(() => {
      this.active = !this.active;
    }, 1000)
  }
}
