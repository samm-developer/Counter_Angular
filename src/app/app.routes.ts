import { Routes } from '@angular/router';
import { TwoPlayerComponent } from './pages/two-player/two-player.component';
import { FourPlayerComponent } from './pages/four-player/four-player.component';

export const routes: Routes = [
  { path: '', redirectTo: 'two-players', pathMatch: 'full' },
  { path: 'two-players', component: TwoPlayerComponent },
  { path: 'four-players', component: FourPlayerComponent },
  { path: '**', redirectTo: 'two-players' },
];
