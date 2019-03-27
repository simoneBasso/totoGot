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

  users: User[] = utils.getAll();
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

  daenerysTrueUserAnswer = [];
  daenerysFalseUserAnswer = [];
  daenerysUndefinedUserAnswer = [];

  cerseiTrueUserAnswer = [];
  cerseiFalseUserAnswer = [];
  cerseiUndefinedUserAnswer = [];

  killKingByAnswer = [];
  killKingByDescri = [];

  newKingByAnswer = [];
  newKingByDescri = [];

  maps: GotMaps = new GotMaps();



  view: any[] = [300, 300];
  colorSchemeAlive = {
    domain: ['#8bc34a', '#f44336', '#9e9e9e', '#AAAAAA']
  };
  colorSchemeBecame = {
    domain: ['#0095cd', '#5d7985', '#f9fefe', '#AAAAAA']
  };

  dataGraph = {
    aliveData: [] = [],
    becameData: [] = [],
    killedByData: [] = [],
    daenerysData: [] = [],
    cerseiData: [] = [],
    killKing: [] = [],
    becameKing: [] = []
  }



  constructor() { }

  ngOnInit() {
    this.users.forEach(x => this.usersCharsResponse.push({ user: x.name, response: x.responseCharacters }));
    this.popoluteData();

  }
  selectedNewChar(event) {
    this.popoluteData();
  }
  onSelect(event) {
    console.log(this.killedByDescri);
  }

  popoluteData() {
    this.dataGraph.aliveData = [];
    this.dataGraph.becameData = [];
    this.dataGraph.killedByData = [];
    this.dataGraph.daenerysData = [];
    this.dataGraph.cerseiData = [];
    this.dataGraph.killKing = [];
    this.dataGraph.becameKing = [];
    this.restartArray();


    this.usersCharsResponse.forEach(x => {
      let responses = x.response;
      const response = _.findWhere(responses, res => res.name == this.selectedChar);
      if (response) {
        this.setDataInArray('alive', response.alive, x.user);
        this.setDataInArray('became', response.became, x.user);
        this.setDataInArrayKilled(response.killedBy, x.user);
      };
    });
    //pregrant
    //daeny
    let danResponse = [];
    this.users.forEach(x => danResponse.push({ user: x.name, response: x.responsePregnantQuestion[0].response }));
    danResponse.forEach(dan => {
      this.setDataInArray('daenerys', dan.response, dan.user);
    });
    //cersei
    let cerResponse = [];
    this.users.forEach(x => cerResponse.push({ user: x.name, response: x.responsePregnantQuestion[1].response }));
    cerResponse.forEach(res => {
      this.setDataInArray('cersei', res.response, res.user);
    });
    //killKing
    let killNightResponse = [];
    this.users.forEach(x => killNightResponse.push({ user: x.name, response: x.responseQuestion[0].response }));
    killNightResponse.forEach(res => {
      this.setDataInArrayChar(res.response, res.user, this.killKingByAnswer);
    });
    //became King
    let becameKingResponse = [];
    this.users.forEach(x => becameKingResponse.push({ user: x.name, response: x.responseQuestion[1].response }));
    becameKingResponse.forEach(res => {
      this.setDataInArrayChar(res.response, res.user, this.newKingByAnswer);
    });


    this.dataGraph.aliveData = [
      { "name": "Vivo", "value": this.aliveTrueUserAnswer.length },
      { "name": "Morto", "value": this.aliveFalseUserAnswer.length },
      { "name": "Nessuna risposta", "value": this.aliveUndefinedUserAnswer.length }
    ];
    this.dataGraph.becameData = [
      { "name": "Si", "value": this.becameTrueUserAnswer.length },
      { "name": "Morto", "value": this.becameFalseUserAnswer.length },
      { "name": "Nessuna risposta", "value": this.becameUndefinedUserAnswer.length },
    ];

    let killedMapp =_ .map( _.groupBy(this.killedByAnswer, x => x.charac), (arr, who) => this.createInfoGeneric(who,arr));
    this.killedByDescri = killedMapp;
    this.dataGraph.killedByData =  _.map( killedMapp, x => { return { name: x.name, value: x.value.length } });

    this.dataGraph.daenerysData = [
      { "name": "Si", "value": this.daenerysTrueUserAnswer.length },
      { "name": "No", "value": this.daenerysFalseUserAnswer.length },
      { "name": "Nessuna risposta", "value": this.daenerysUndefinedUserAnswer.length }
    ];

    this.dataGraph.cerseiData = [
      { "name": "Si", "value": this.cerseiTrueUserAnswer.length },
      { "name": "No", "value": this.cerseiFalseUserAnswer.length },
      { "name": "Nessuna risposta", "value": this.cerseiUndefinedUserAnswer.length }
    ];

    let killMappin = _.map( _.groupBy(this.killKingByAnswer, x => x.charac), (arr, who) => this.createInfoGeneric(who,arr));
    this.killKingByDescri = killMappin;
    console.log(killMappin);
    this.dataGraph.killKing = _.map( killMappin, x => { return { name: x.name, value: x.value.length } });

    let newKinMapp =_ .map( _.groupBy(this.newKingByAnswer, x => x.charac), (arr, who) => this.createInfoGeneric(who,arr));
    this.newKingByDescri = newKinMapp;
    this.dataGraph.becameKing = _.map( newKinMapp, x => { return { name: x.name, value: x.value.length } });


  };

  setDataInArray(props: string, value, user) {
    if (value === undefined) this[props + 'UndefinedUserAnswer'].push(user);
    else if (value === false) this[props + 'FalseUserAnswer'].push(user);
    else if (value === true) this[props + 'TrueUserAnswer'].push(user)
  }

  setDataInArrayKilled(chara, user) {
    if (!chara) this.killedByAnswer.push({ user: user, charac: Types.Characters.UNDEFINED })
    else this.killedByAnswer.push({ user: user, charac: chara })
  }

  setDataInArrayChar(chara, user, array: any[]) {
    if (!chara) array.push({ user: user, charac: Types.Characters.UNDEFINED })
    else array.push({ user: user, charac: chara })
  }


  private createInfoGeneric(char, val) {
    let nameReal = this.maps.charMap.get(parseInt(char));
    return { name: nameReal, value: val }
  }

  restartArray() {
    this.aliveUndefinedUserAnswer = [];
    this.aliveFalseUserAnswer = [];
    this.aliveTrueUserAnswer = [];
    this.becameUndefinedUserAnswer = [];
    this.becameFalseUserAnswer = [];
    this.becameTrueUserAnswer = [];
    this.killedByAnswer = [];
    this.daenerysTrueUserAnswer = [];
    this.daenerysFalseUserAnswer = [];
    this.daenerysUndefinedUserAnswer = [];
    this.cerseiTrueUserAnswer = [];
    this.cerseiFalseUserAnswer = [];
    this.cerseiUndefinedUserAnswer = [];
    this.killKingByAnswer = [];
    this.killKingByDescri = [];
    this.newKingByAnswer = [];
    this.newKingByDescri = [];
  }

  getAnswerByChar(char: Types.Characters, resp: ResponseCharacter[]) {
    return _.findWhere(resp, { name: char });
  }

  getAnswerPregnat(type: Types.Question, resp: ResponsePregnantQuestion[]) {
    return _.findWhere(resp, { type: type });
  }

  getAnswerQuestion(type: Types.Question, resp: ResponseQuestion[]) {
    return _.findWhere(resp, { type: type });
  }

  getName() {
    return this.maps.charMap.get(this.selectedChar);
  }
  getImageName() {
    return this.getName().replace(/ /g, '_');
  }



}
