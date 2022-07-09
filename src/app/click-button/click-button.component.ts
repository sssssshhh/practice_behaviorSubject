import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SaveName } from '../save/saveName';

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.less']
})
export class ClickButtonComponent {
  name = new FormControl('');

  constructor(private saveName: SaveName ) { }

  save() {
    this.saveName.setName(this.name.value);
  }

  get currentName(): string {
    return this.saveName.name;
  }

}
