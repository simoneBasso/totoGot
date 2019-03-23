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
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  users:User[] = utils.getAll();
  usersCharsResponse = [];
  allChar = utils.getListChar();
  selectedChar = Types.Characters.JON_SNOW
  allDataForGraph = [];
  aliveUndefinedUserAnswer = [];
  aliveFalseUserAnswer = [];
  aliveTrueUserAnswer = [];
  becameUndefinedUserAnswer = [];
  becameFalseUserAnswer = [];
  becameTrueUserAnswer = [];
  killedByAnswer = [];
  killedByDescri = [];
  maps:GotMaps = new GotMaps();

  

  view: any[] = [300, 300];
  colorSchemeAlive = {
    domain: ['#8bc34a', '#f44336', '#9e9e9e', '#AAAAAA']
  };
  colorSchemeBecame = {
    domain: ['#0095cd', '#5d7985', '#f9fefe', '#AAAAAA']
  };


  
  
  dataGraph = {
	  aliveData:[] = [],
	  becameData:[] = [],
	  killedByData:[] = []
  }
  
  
  
  constructor() { }

  ngOnInit() {
     this.users.forEach( x => this.usersCharsResponse.push( {user:x.name, response:x.responseCharacters}) ); 
       this.popoluteData();

  }
  selectedNewChar(event){
    this.popoluteData();
  }
  onSelect(event) {
    console.log(this.killedByDescri);
  }

  popoluteData(){
    this.dataGraph.aliveData = [];
	  this.dataGraph.becameData = [],
	  this.dataGraph.killedByData = []
	  this.restartArray();
	  
	  
	  this.usersCharsResponse.forEach( x => {
		  let responses =  x.response;
		  const response = _.findWhere(responses,res => res.name == this.selectedChar);
        if(response){
          this.setDataInArray('alive',response.alive,x.user);
          this.setDataInArray('became',response.alive,x.user);
          this.setDataInArrayKilled(response.killedBy,x.user);
        }
		});
		
    this.dataGraph.aliveData = [
					{ "name": "Vivo", "value": this.aliveTrueUserAnswer.length },
					{ "name": "Morto", "value": this.aliveFalseUserAnswer.length },
					{ "name": "Nessuna risposta", "value": this.aliveUndefinedUserAnswer.length }
				],
    this.dataGraph.becameData = [
					{ "name": "Si", "value": this.becameTrueUserAnswer.length },
					{ "name": "Morto", "value": this.becameFalseUserAnswer.length },
					{ "name": "Nessuna risposta", "value": this.becameUndefinedUserAnswer.length},
        ],
      this.killedByDescri =  _.map(_.groupBy(this.killedByAnswer, x => x.char),function(arr,who){return {name:who,value:arr}})
      this.dataGraph.killedByData =  _.map(_.groupBy(this.killedByAnswer, x => x.char),function(arr,who){return {name:who,value:arr.length}})
		
		
		};

  setDataInArray(props:string,value,user) {
    if(value === undefined) this[props + 'UndefinedUserAnswer'].push(user);
	  else if(value === false) this[props + 'FalseUserAnswer'].push(user);
	  else if(value === true) this[props + 'TrueUserAnswer'].push(user)
  }

  setDataInArrayKilled(chara,user){
	  if(!chara) this.killedByAnswer.push({user:user, charac:Types.Characters.UNDEFINED})
		else this.killedByAnswer.push({user:user, charac:chara})
  }
  

  restartArray(){
	this.aliveUndefinedUserAnswer = [];
  this.aliveFalseUserAnswer = [];
  this.aliveTrueUserAnswer = [];
  this.becameUndefinedUserAnswer = [];
  this.becameFalseUserAnswer = [];
  this.becameTrueUserAnswer = [];
  this.killedByAnswer = [];
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

  getName(){
    return this.maps.charMap.get(this.selectedChar);
  }
  getImageName(){
    return this.getName().replace(/ /g, '_');
  }
  
}
