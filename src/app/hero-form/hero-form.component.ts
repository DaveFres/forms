import { Component, Input } from '@angular/core';
import * as data from '../../assets/to-render.json';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  @Input() jsonData: any;

  // powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero('Dr. IQ', 'test@gmail.com');

  submitted = false;

  ngOnInit = () => {
    console.log('this.jsonData :>> ', this.jsonData);
  };

  onSubmit() {
    this.submitted = true;
    console.log(this);
  }

  newHero() {
    // console.log(this.model);

    this.model = new Hero('', '');
  }

  skyDog(): Hero {
    const myHero = new Hero('SkyDog', 'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN 3DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////
}
