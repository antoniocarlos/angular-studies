import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public name: string = 'eu';
  public age: number = 34;

  public checkDisabled: boolean = true;

  public onClick = (valeu: MouseEvent): void => {
    console.log(valeu);
  }

  public position: {x: number, y: number} = {x: 0, y: 0};

  public mousemoveTest(event: MouseEvent): void {
    if(event.type === "mousemove") {
      this.position.x = event.offsetX;
      this.position.y = event.offsetY;
    }
    if(event.type === "mouseleave"){
      this.position.x = 0;
      this.position.y = 0;
    }
  }
}
