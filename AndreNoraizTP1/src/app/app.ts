import { Component, signal } from '@angular/core';
import { Composant } from './composant/composant';
import { Footer } from './footer/footer';
import { Carre } from './carre/carre';
import { NgClass } from '@angular/common';

@Component({
  imports: [Composant, Footer, Carre, NgClass],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly backgroundColor = signal('white');
}
