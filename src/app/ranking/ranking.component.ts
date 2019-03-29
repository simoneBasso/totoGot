import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/models/user.model';
import * as utils from '../allResponse';
import { calculateCharacter, calculatePregnantQuestion, calculateQuestion } from '../shared/calculate/calculateCharacter';
import { ResultCalculatedResponse, ResultCharactherResponse } from '../shared/models/results.model';
import { Types } from '../shared/enum/types';
import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from '../shared/models/response_characters.model';
import _ from 'underscore';
import { GotMaps } from '../shared/calculate/maps';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { TypeScriptEmitter } from '@angular/compiler';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['../app.component.scss', './ranking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RankingComponent implements OnInit {

  readyTime = false;
  answers: User;
  users: User[];
  showTimer = true;
  allResults: ResultCalculatedResponse[] = [];
  maps: GotMaps = new GotMaps();
  a = new Date();
  b = new Date('2019-04-19');
  panelOpenState = true;

  config = {}
  displayedColumns: string[] = ['position', 'name', 'points'];

  constructor(public dialog: MatDialog, private router: Router) {
    const time = this.getTime()
    this.config = {
      leftTime: time,
      template: "$!d! $!h! $!m! $!s! "
    }


    this.answers = utils.getAnswers();
    this.users = utils.getAll();

  }

  ngOnInit() {
    this.readyTime = true;
    this.users.forEach(x => this.allResults.push(
      this.calculateUser(x, this.maps))
    );
    this.allResults = _.sortBy(this.allResults, x => x.points);

  }

  openDialog(): void {
    if (sessionStorage.getItem("alreadyVisited")) {
      return;
    }
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(res => {
      sessionStorage.setItem("alreadyVisited", "true");
      if (res == false) {
        this.router.navigate(['imNightKing'])
      }
      console.log(res)
    });
  }

  getTime() {
    this.openDialog();
    const a = new Date();
    const b = new Date('2019-04-19');
    return (+b - +a) / 1000;
  }

  calculateUser(user: User, gotMap: GotMaps): ResultCalculatedResponse {
    var res = {
      name: user.name,
      resultsCharactersQuestions: [],
      resultsOtherCharactersQuestions: [],
      resultsPregantQuestions: [],
      resultsQuestions: [],
      otherCharQuestion:[],
      totalPoints: 0
    }

    const charResponse = _.filter(user.responseCharacters, x => x.name <= Types.Characters.NYMERIA)
    const otherCharResponse = _.filter(user.responseCharacters, x => x.name > Types.Characters.NYMERIA)

    charResponse.forEach(
      x => {
        var singleRes = calculateCharacter(x, this.getAnswerByChar(x.name, this.answers.responseCharacters));
        res.resultsCharactersQuestions.push({
          questionName: gotMap.charMap.get(x.name),
          userResponse: x,
          results: singleRes
        });

        res.totalPoints += singleRes.points
      }
    )
    otherCharResponse.forEach(
      x => {
        var singleRes = calculateCharacter(x, this.getAnswerByChar(x.name, this.answers.responseCharacters));
        res.resultsOtherCharactersQuestions.push({
          questionName: gotMap.charMap.get(x.name),
          userResponse: x,
          results: singleRes
        });

        res.totalPoints += singleRes.points
      }
    )

    user.responsePregnantQuestion.forEach(
      x => {
        var singleRes = calculatePregnantQuestion(x, this.getAnswerPregnat(x.type, this.answers.responsePregnantQuestion));
        res.resultsPregantQuestions.push({
          questionName: gotMap.questionsMap.get(x.type),
          userResponse: x,
          results: singleRes
        });
        res.totalPoints += singleRes.points
      }
    )

    user.responseQuestion.forEach(
      x => {
        var singleRes = calculateQuestion(x, this.getAnswerQuestion(x.type, this.answers.responseQuestion));
        res.resultsQuestions.push({
          questionName: gotMap.questionsMap.get(x.type),
          userResponse: x,
          results: singleRes
        });

        res.totalPoints += singleRes.points
      }
    )

    user.returnCharacters.forEach(x => {
      var singleRes = this.getAnswerByOtherChar(x,this.answers.returnCharacters);
      res.otherCharQuestion.push({
        questionName:  gotMap.charMap.get(x),
        userResponse: x,
        results: singleRes
      });
      if(singleRes) res.totalPoints += 5;
      else res.totalPoints -= 1;

    });

    return res;
  }


  getAnswerByChar(char: Types.Characters, resp: ResponseCharacter[]) {
    return _.findWhere(resp, { name: char });
  }

  getAnswerByOtherChar(char: Types.Characters, resp: Types.Characters[]) {
    return _.find(resp, x => x == char);
  }

  getAnswerPregnat(type: Types.Question, resp: ResponsePregnantQuestion[]) {
    return _.findWhere(resp, { type: type });
  }

  getAnswerQuestion(type: Types.Question, resp: ResponseQuestion[]) {
    return _.findWhere(resp, { type: type });
  }

  isTheTime() {
    this.showTimer = false;
  }
}
