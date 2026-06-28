import { Component } from '@angular/core';
import { CounterBoardComponent } from '../../components/counter-board/counter-board.component';

@Component({
  selector: 'app-two-player',
  imports: [CounterBoardComponent],
  templateUrl: './two-player.component.html',
})
export class TwoPlayerComponent {
  readonly labels = ['Player A', 'Player B'];
}
