import { Component } from '@angular/core';
import { CounterBoardComponent } from '../../components/counter-board/counter-board.component';

@Component({
  selector: 'app-four-player',
  imports: [CounterBoardComponent],
  templateUrl: './four-player.component.html',
})
export class FourPlayerComponent {
  readonly labels = ['Player A', 'Player B', 'Player C', 'Player D'];
}
