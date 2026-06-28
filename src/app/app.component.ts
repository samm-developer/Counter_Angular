import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly labels = ['Player A', 'Player B'];
  readonly counts = signal<number[]>([0, 0]);

  increment(index: number): void {
    this.counts.update((values) =>
      values.map((value, i) => (i === index ? value + 1 : value)),
    );
  }

  decrement(index: number): void {
    this.counts.update((values) =>
      values.map((value, i) => (i === index ? value - 1 : value)),
    );
  }

  reset(index: number): void {
    this.counts.update((values) =>
      values.map((value, i) => (i === index ? 0 : value)),
    );
  }

  isZero(index: number): boolean {
    return this.counts()[index] === 0;
  }
}
