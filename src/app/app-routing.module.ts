import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';
import { DetailAnswerComponent } from './detail-answer/detail-answer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { RulesComponent } from './rules/rules.component';
import { ImNightKingComponent } from './im-night-king/im-night-king.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';

const appRoutes: Routes = [
  { path: 'ranking', component: RankingComponent },
  { path: 'details', component: DetailAnswerComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'imNightKing', component: ImNightKingComponent },
  { path: 'celebration', component: CelebrationsComponent },
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
