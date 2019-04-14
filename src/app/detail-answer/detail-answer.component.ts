
import { Component, OnInit, ɵConsole } from '@angular/core';
import { User } from '../shared/models/user.model';
import * as utils from '../allResponse';
import { calculateCharacter, calculatePregnantQuestion, calculateQuestion } from '../shared/calculate/calculateCharacter';
import { ResultCalculatedResponse, ResultCharactherResponse } from '../shared/models/results.model';
import { Types } from '../shared/enum/types';
import { ResponseCharacter, ResponsePregnantQuestion, ResponseQuestion } from '../shared/models/response_characters.model';
import _ from 'underscore';
import { GotMaps } from '../shared/calculate/maps';
import { TypeScriptEmitter } from '@angular/compiler';

@Component({
  selector: 'app-detail-answer',
  templateUrl: './detail-answer.component.html',
  styleUrls: ['./detail-answer.component.scss']
})
export class DetailAnswerComponent implements OnInit {

  imgSource = "assets/images/avatar/";
  answers: User;
  charactersRow: ResponseCharacter[] = [];
  userCharactersRow: ResponseCharacter[] = [];
  usersReturns: Types.Characters[];
  selectedUser:string = 'Basso';
  userAnswer:User;
  userCharAnswer:User;
  users:User[];
  usersNameList:string[]=[];
  confronto = true;
  allResults:ResultCalculatedResponse[] = [];
  maps:GotMaps = new GotMaps();
  showAnswers = true;
  
  displayedColumns: string[] = ['name', 'info','situation', 'became', 'killedBy'];
  constructor() { 
    this.answers = utils.getAnswers();
    this.users = utils.getAll();
    this.usersNameList = _.sortBy(_.map(this.users, x => x.name),y => y);
    this.selectedUser = this.users[0].name;

  }

  ngOnInit() {
    this.charactersRow = _.sortBy(this.answers.responseCharacters, x => x.name);
   this.selectUser({});
  }

  selectUser(event){
    console.log(event)
    this.userAnswer = _.findWhere(this.users, {name: this.selectedUser});
    this.userCharAnswer = _.sortBy(this.userAnswer.responseCharacters,x => x.name);
    this.userCharactersRow = this.userAnswer.responseCharactersBonus;
    this.usersReturns = this.userAnswer.returnCharacters;
    console.log(this.usersReturns);
    
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

  getBonusAnswer(bonusCharRespos: ResponseCharacter){
    let found = _.findWhere(this.answers.responseCharactersBonus, {name: bonusCharRespos.name});
    if(!found) found = {
      name:bonusCharRespos.name,
      alive:undefined,
      becameNight:undefined,
      killedBy: undefined
    }
    return found;
  }


  getCharPoints(res, truth,valSucc,valErr){
    if(res !== true && res !== false || truth !== true && truth !== false) return {val:'0',class:'unde'};
    else if(res === truth ) return {val:valSucc,class:'success'};
    else return {val:valErr,class:'error'};
  }
  getCharBecamePoints(res, truth,valSucc,valErr){
    if(res !== true && res !== false) return {val:'0',class:'unde'};
    else if(res === truth ) return {val:valSucc,class:'success'};
    else return {val:valErr,class:'error'};
  }

  getKilledPoints(res:Types.Characters, truth:Types.Characters,valSucc,valErr){
    if( (res === undefined  || res == Types.Characters.UNDEFINED || res == Types.Characters.NOT_CLEAR) ||
      (res === undefined  || truth == Types.Characters.UNDEFINED || truth == Types.Characters.NOT_CLEAR)   )
        return {val:'0',class:'unde'};
        
    else if(res === truth ) return {val:valSucc,class:'success'};
    else return {val:valErr,class:'error'};
  }

  getImageName(char:Types.Characters){
    return this.maps.charMap.get(char).replace(/ /g, '_');
  }

  getReturnPoints(res:Types.Characters){
    var found = _.find(this.answers.returnCharacters, function(c){ return c  == res; });
    if(found)  return {val:'5',class:'success'};
    else return {val:'-1',class:'error' }
  }

}
