import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title *ngIf="destroy" title="test"></app-title>
    <br />
    {{ value }}
    <br />
    <button (click)=add()>Increment</button>
    <br />
    <button (click)=destroyComponent()>destruir componente</button>
    <br /> -->
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-life-cycle></app-life-cycle> -->
    <app-directives></app-directives>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() { }

  public value: number = 0;

  public add = (): number => {
    return this.value++;
  };

  public destroy = true;

  public destroyComponent = (): void => {
    this.destroy = false;
  }
}
