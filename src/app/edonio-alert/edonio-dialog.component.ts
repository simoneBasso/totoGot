import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material';
import * as utils from '../allResponse';

@Component({
  selector: 'app-edonio-dialog',
  templateUrl: './edonio-dialog.component.html',
  styleUrls: ['../app.component.scss','./edonio-dialog.component.scss']
})
export class EdonioDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EdonioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  
  okClick(): void {
    this.dialogRef.close();
  }

}
