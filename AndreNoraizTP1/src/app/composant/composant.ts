import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-composant',
  styleUrl: './composant.css',
  templateUrl: './composant.html',
})
export class Composant implements OnInit {
  readonly text = output<string>();
  public prenoms = 'Andre Noraiz';

  ngOnInit(): void {
    this.text.emit(this.prenoms);
  }
}
