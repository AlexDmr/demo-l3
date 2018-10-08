import { Component } from '@angular/core';
import {NewtonService} from './newton.service';
import {NewtonObject} from './newton.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newton: NewtonService) {
  }

  add(evt: MouseEvent, color: string) {
    this.newton.append( {
      x: evt.offsetX,
      y: evt.offsetY,
      vx: 0,
      vy: 0,
      r: 20,
      color: color
    } );
  }

  appendBall(color: string) {
    this.newton.append( {
      x: Math.random() * 400,
      y: 200 + Math.random() * 200,
      vx: 0,
      vy: 0,
      r: 20,
      color: color
    } );
  }

  remove(obj: NewtonObject) {
    this.newton.remove(obj);
  }

  get objects(): NewtonObject[] {
    return this.newton.objects;
  }
}
