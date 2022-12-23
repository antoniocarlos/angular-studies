import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destroy" title="test"></app-title>
    {{ value }}
    <button (click)=add()>Increment</button>
    <button (click)=destroyComponent()>destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() { }

  public value: number = 0;

  public add = (): number => {
    return this.value++;
  };

  public destroy = true;

  public destroyComponent = (): void => {
    this.destroy = false;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
