import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayContainer} from '@angular/cdk/overlay';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {
  MatButtonModule,
  MatSelectModule,
  MatTabsModule,
  MatDialogModule,
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
  faListOl,
  faPaperPlane,
  faDownload,
  faThumbsUp,
  faThumbsDown,
  faMoneyBillWave,
  faUsers,
  faCalendarCheck,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCaretLeft,
  faCaretRight
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
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { EdonioDialogComponent } from './edonio-alert/edonio-dialog.component';
import { ImNightKingComponent } from './im-night-king/im-night-king.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';

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
  faListOl,
  faPaperPlane,
  faDownload,
  faThumbsUp,
  faThumbsDown,
  faMoneyBillWave,
  faUsers,
  faCalendarCheck,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCaretLeft,
  faCaretRight
);

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    TableResponseComponent,
    DetailAnswerComponent,
    StatisticComponent,
    RulesComponent,
    AlertDialogComponent,
    ImNightKingComponent,
    EdonioDialogComponent,
    CelebrationsComponent
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
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    NgxChartsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents: [AlertDialogComponent,EdonioDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule  {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('black-theme');
  }
}
