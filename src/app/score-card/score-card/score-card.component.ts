import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
  target: number;
  actualCurrent: number;
  virtualCurrent: number;
  totalScore: number;
  currentScore: number;
  currentVerbal: number = 30;
  targetVerbal: number = 40;
  currentQuant: number = 10;
  targetQuant: number = 20;
  targetScore: number;
  percentTarget: number;
  percentCurrent: number;
  displayFlag: boolean;
  totalQuantScore: number;
  currentQuantScore: number;
  targetQuantScore: number;
  totalVerbalScore: number;
  currentVerbalScore: number;
  targetVerbalScore: number;
  percentQuantTarget: number;
  percentQuantCurrent: number;
  virtualQuantCurrent: number;
  percentVerbalTarget: number;
  percentVerbalCurrent: number;
  virtualVerbalCurrent: number;

  constructor() {
    this.displayFlag = false;
  }

  ngOnInit() {
  }

  getTotalTargetWidth() {
    return this.percentTarget.toString() + '%';
  }

  getTotalCurrentWidth() {
    return this.virtualCurrent.toString() + '%';
  }

  getQuantTargetWidth() {
    return this.percentQuantTarget.toString() + '%';
  }

  getQuantCurrentWidth() {
    return this.virtualQuantCurrent.toString() + '%';
  }

  getVerbalTargetWidth() {
    return this.percentVerbalTarget.toString() + '%';
  }

  getVerbalCurrentWidth() {
    return this.virtualVerbalCurrent.toString() + '%';
  }

  submit() {
    this.displayFlag = true;
    this.totalScore = 800;
    this.currentScore = 200 + (this.currentVerbal + this.currentQuant) * 5;
    this.targetScore = 200 + (this.targetVerbal + this.targetQuant) * 5;
    this.percentCurrent = this.currentScore / this.totalScore * 100;
    this.percentTarget = this.targetScore / this.totalScore * 100;
    this.virtualCurrent = this.percentCurrent * 100 / this.percentTarget;

    this.totalQuantScore = 300;
    this.currentQuantScore = this.currentQuant * 5;
    this.targetQuantScore = this.targetQuant * 5;
    this.percentQuantCurrent = this.currentQuantScore / this.totalQuantScore * 100;
    this.percentQuantTarget = this.targetQuantScore / this.totalQuantScore * 100;
    this.virtualQuantCurrent = this.percentQuantCurrent * 100 / this.percentQuantTarget;

    this.totalVerbalScore = 300;
    this.currentVerbalScore = this.currentVerbal * 5;
    this.targetVerbalScore = this.targetVerbal * 5;
    this.percentVerbalCurrent = this.currentVerbalScore / this.totalVerbalScore * 100;
    this.percentVerbalTarget = this.targetVerbalScore / this.totalVerbalScore * 100;
    this.virtualVerbalCurrent = this.percentVerbalCurrent * 100 / this.percentVerbalTarget;

  }
}
