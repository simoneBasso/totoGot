import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material';
import * as utils from '../allResponse';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['../app.component.scss','./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  puntate = utils.getNumberOfAnswers();
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onWinterClick(): void {
    this.dialogRef.close(true);
  }

}
