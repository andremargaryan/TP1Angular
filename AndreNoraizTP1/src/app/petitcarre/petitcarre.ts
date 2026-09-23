import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-petitcarre',
  styleUrl: './petitcarre.css',
  templateUrl: './petitcarre.html',
})
export class Petitcarre {
  @Input() color = '';
  @Output() colorSelected: EventEmitter<string> = new EventEmitter<string>();
}
