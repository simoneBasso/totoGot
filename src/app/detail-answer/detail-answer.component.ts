
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
  selector: 'app-detail-answer',
  templateUrl: './detail-answer.component.html',
  styleUrls: ['./detail-answer.component.scss']
})
export class DetailAnswerComponent implements OnInit {

 
  answers: User;
  charactersRow: ResponseCharacter[] = [];
  selectedUser:string = 'Basso';
  userAnswer:User;
  userCharAnswer:User;
  users:User[];
  usersNameList:string[]=[];
  confronto = true;
  allResults:ResultCalculatedResponse[] = [];
  maps:GotMaps = new GotMaps();
  showAnswers = true;
  
  displayedColumns: string[] = ['name', 'situation', 'became', 'killedBy'];
  constructor() { 
    this.answers = utils.getAnswers();
    this.users = utils.getAll();
    this.usersNameList = _.sortBy(_.map(this.users, x => x.name),y => y);

  }

  ngOnInit() {
    this.charactersRow = _.sortBy(this.answers.responseCharacters, x => x.name);
    this.selectUser({})
  }

  selectUser(event){
    console.log(event)
    this.userAnswer = _.findWhere(this.users, {name: this.selectedUser});
    this.userCharAnswer = _.sortBy(this.userAnswer.responseCharacters,x => x.name);
    console.log(this.userAnswer)
  }

  getCharName(char:Types.Characters){
    return this.maps.charMap.get(char);
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

  getCharPoints(res, truth,valSucc,valErr){
    if(res !== true && res !== false || truth !== true && truth !== false) return {val:'0',class:'unde'};
    else if(res === truth ) return {val:valSucc,class:'success'};
    else return {val:valErr,class:'error'};
  }



}
