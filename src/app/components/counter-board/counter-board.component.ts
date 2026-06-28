import { Component, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter-board',
  imports: [],
  templateUrl: './counter-board.component.html',
  styleUrl: './counter-board.component.scss',
})
export class CounterBoardComponent implements OnInit {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('Each player has their own counter');
  readonly labels = input.required<string[]>();

  readonly counts = signal<number[]>([]);

  ngOnInit(): void {
    this.counts.set(this.labels().map(() => 0));
  }

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
