import { Injectable } from '@angular/core';
import {NewtonObject} from './newton.data';

@Injectable({
  providedIn: 'root'
})
export class NewtonService {
  objects: NewtonObject[] = [];
  G = 9.81 / 100;
  elasticity = 0.99;

  constructor() {
    setInterval( () => this.updateObjects(), 10 );
  }

  append(obj: NewtonObject) {
    this.objects.push(obj);
  }

  remove(obj: NewtonObject) {
    const pos = this.objects.indexOf(obj);
    if (pos >= 0 ) {
      this.objects.splice(pos, 1);
    }
  }

  private updateObjects() {
    this.objects.forEach( obj => {
      // Compute new position
      obj.y += obj.vy;

      if (obj.y < 0) {
        obj.vy = - this.elasticity * obj.vy;
        obj.y = -obj.y;
      }

      obj.vy -= this.G;
    });
  }

}
