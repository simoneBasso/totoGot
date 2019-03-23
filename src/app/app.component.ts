import { Component } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'totoGoT';
  hideAll = false;
  constructor(private router: Router) {
    console.log(this.router.url)
    }
}
