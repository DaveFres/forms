import { Component } from '@angular/core';

import dataFromJson from '../assets/to-render.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = dataFromJson;

  // ngOnInit() {
  //   this.data = dataFromJson;
  // }
}
