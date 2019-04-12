import { Component, OnInit } from '@angular/core';
import * as utils from '../allResponse';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['../app.component.scss','./rules.component.scss']
})
export class RulesComponent implements OnInit {


  users = utils.getAll().length;
  montepremi = 2* this.users;
  upDate = '06/04/2019'

  constructor() { }

  ngOnInit() {
  }

}
