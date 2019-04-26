import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Types } from '../shared/enum/types'
import { User } from '../shared/models/user.model';
import { ResponseCharacter } from '../shared/models/response_characters.model';
import { GotMaps } from '../shared/calculate/maps';
import { _ } from 'underscore';

@Component({
  selector: 'app-table-response',
  templateUrl: './table-response.component.html',
  styleUrls: ['./table-response.component.scss']
})
export class TableResponseComponent implements OnInit, OnChanges {
  

  @Input()
  answers: User;

  imgSource = "assets/images/avatar/";

  maps:GotMaps = new GotMaps();

  charactersRow: ResponseCharacter[] = [];
  displayedColumns: string[] = ['name', 'situation', 'became', 'killedBy'];


  constructor() { }

  ngOnInit() {
    console.log("change1")  
    this.charactersRow = _.sortBy(_.filter(this.answers.responseCharacters, x => x.name <= Types.Characters.NYMERIA), x => x.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change1")  
    this.charactersRow = _.sortBy(_.filter(this.answers.responseCharacters, x => x.name <= Types.Characters.NYMERIA), x => x.name);
  }

  getCharName(char:Types.Characters){
    return this.maps.charMap.get(char);
  }
  getImageName(char:Types.Characters){
    return this.maps.charMap.get(char).replace(/ /g, '_');
  }

}
