import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-im-night-king',
  templateUrl: './im-night-king.component.html',
  styleUrls: ['./im-night-king.component.scss']
})
export class ImNightKingComponent implements OnInit {

  constructor() { 
    document.getElementById('medico').style.display = 'block';
    document.getElementById('main').style.display = 'none';
   
  }

  ngOnInit() {
  }

}
