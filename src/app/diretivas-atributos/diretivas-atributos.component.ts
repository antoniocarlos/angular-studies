import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public active: boolean = false;

  public height: string = '100px';

  ngOnInit(): void {
    setInterval(() => {
      this.active = !this.active;
      this.height = this.height === '100px' ? '500px' : '100px';
    }, 1000)
  }
}
