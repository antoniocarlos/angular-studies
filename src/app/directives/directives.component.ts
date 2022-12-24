import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public condition: boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 3000);
  }

  public condition2: boolean = true;

  public toggleCondition2 = (): void => {
    this.condition2 = !this.condition2;
  }

  public list: Array<{ name: string, age: number }> = [
    { name: "primeiro", age: 10 },
    { name: "segundo", age: 12 },
    { name: "terceiro", age: 14 }
  ]

  public addList = (name: string, age: number): void => {
    this.list.push({name, age});
  }

  public removeItem = (item: number) => {
    this.list.splice(item, 1);
  }

  public name: string = "eu";

}
