import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatExpansionModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faBars,
  faSkull,
  faSkullCrossbones,
  faSmile,
  faMinus,
  faCross,
  faFistRaised,
  faChartBar,
  faBookDead,
  faQuestionCircle,
  faListOl
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { TableResponseComponent } from './table-response/table-response.component';
import { DetailAnswerComponent } from './detail-answer/detail-answer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { RulesComponent } from './rules/rules.component';

library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
  faSkull,
  faSkullCrossbones,
  faSmile,
  faMinus,
  faCross,
  faFistRaised,
  faChartBar,
  faBookDead,
  faQuestionCircle,
  faListOl
);

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    TableResponseComponent,
    DetailAnswerComponent,
    StatisticComponent,
    RulesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountdownModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
