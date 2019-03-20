import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { DetailAnswerComponent } from './detail-answer/detail-answer.component';

const appRoutes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'details', component: DetailAnswerComponent },
  { path: '',
    redirectTo: '/ranking',
    pathMatch: 'full'
  },
  { path: '**', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
