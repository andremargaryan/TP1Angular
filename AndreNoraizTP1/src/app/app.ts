import { Component } from '@angular/core';
import { Composant } from './composant/composant';

@Component({
  imports: [Composant],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected prenoms = '';

  protected headerOutput(prenoms: string): void {
    this.prenoms = prenoms;
  }
}
