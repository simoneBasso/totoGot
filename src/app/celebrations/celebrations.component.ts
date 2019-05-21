import { Component, OnInit } from '@angular/core';
import * as FireworksCanvas from 'fireworks-canvas'
@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.scss']
})
export class CelebrationsComponent implements OnInit {
  fireworks;

  constructor() { 
   
  }
 
  ngOnInit() {
    this.fireworks = document.getElementById('fireworks');
    const options = {
      maxRockets: 12,            // max # of rockets to spawn
      rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
      numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
      explosionMinHeight: 0.5,  // percentage. min height at which rockets can explode
      explosionMaxHeight: 1,  // percentage. max height before a particle is exploded
      explosionChance: 0.08     // chance in each tick the rocket will explode
    }
    const fireworks = new FireworksCanvas(this.fireworks,options);
    fireworks.start();
  }
}

