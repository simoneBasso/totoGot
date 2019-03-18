import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import * as utils from '../allResponse';
import { calculateCharacter, calculatePregnantQuestion, calculateQuestion } from '../shared/calculate/calculateCharacter';
import { ResultCalculatedResponse, ResultCharactherResponse } from '../shared/models/results.model';
import { Types } from '../shared/enum/types';
import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from '../shared/models/response_characters.model';
import _ from 'underscore';
import { GotMaps } from '../shared/calculate/maps';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  answers: User;
  users:User[];
  allResults:ResultCalculatedResponse[] = [];
  maps:GotMaps = new GotMaps();
  displayedColumns: string[] = ['position', 'name', 'points'];
  constructor() { 

    this.answers = utils.getAnswers();
    this.users = utils.getAll();

  }

  ngOnInit() {
     this.users.forEach( x => this.allResults.push(
       this.calculateUser(x,this.maps))
       );

       console.log(this.answers);
       console.log(this.users);
       console.log(this.allResults);

  }


  calculateUser(user:User,gotMap:GotMaps):ResultCalculatedResponse{
    var res = {
      name:user.name,
      resultsCharactersQuestions:[],
      resultsPregantQuestions:[],
      resultsQuestions:[],
      totalPoints:0
    }

    user.responseCharacters.forEach(
      x => {
        var singleRes = calculateCharacter(x,this.getAnswerByChar(x.name,this.answers.responseCharacters));
        res.resultsCharactersQuestions.push({
          questionName:gotMap.charMap.get(x.name),
          userResponse:x,
          results: singleRes
        });

        res.totalPoints += singleRes.points
      }
      )

      user.responsePregnantQuestion.forEach(
        x => {
          var singleRes = calculatePregnantQuestion( x, this.getAnswerPregnat(x.type,this.answers.responsePregnantQuestion));
          res.resultsPregantQuestions.push({
            questionName:gotMap.questionsMap.get(x.type),
            userResponse:x,
            results: singleRes
          });
          res.totalPoints += singleRes.points
        }
        )

        user.responseQuestion.forEach(
          x => {
            var singleRes = calculateQuestion( x,this.getAnswerQuestion(x.type,this.answers.responseQuestion) );
            res.resultsQuestions.push({
              questionName:gotMap.questionsMap.get(x.type),
              userResponse:x,
              results: singleRes
            });
    
            res.totalPoints += singleRes.points
          }
          )

      return res;
  }


  getAnswerByChar(char: Types.Characters, resp:ResponseCharacter[]){
    return _.findWhere(resp, {name: char});
  }

  getAnswerPregnat(type: Types.Question, resp:ResponsePregnantQuestion[]){
    return _.findWhere(resp, {type: type});
  }

  getAnswerQuestion(type: Types.Question, resp:ResponseQuestion[]){
    return _.findWhere(resp, {type: type});
  }

}
