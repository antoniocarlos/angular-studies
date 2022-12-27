import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public active: boolean = false;

  public height: string = '100px';

  public name: string = 'Teste';

  public list: Array<{ name: string }> = [
    { name: 'Teste 1' },
    { name: 'Teste 2' },
    { name: 'Teste 3' },
    { name: 'Teste 4' },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.active = !this.active;
      this.height = this.height === '100px' ? '100px' : '100px';
    }, 1000)
  }
}
