import { Component, Output, EventEmitter} from '@angular/core';
import { Petitcarre } from '../petitcarre/petitcarre';

@Component({
  imports: [Petitcarre],
  selector: 'app-carre',
  styleUrl: './carre.css',
  templateUrl: './carre.html',
})
export class Carre {
  @Output() backgroundColorChanged = new EventEmitter<string>();
}
