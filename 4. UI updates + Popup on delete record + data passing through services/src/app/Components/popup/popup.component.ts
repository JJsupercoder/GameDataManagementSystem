import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JsonService } from 'src/app/services/json-service.service';

export interface DialogData {
  displayMsg: string;
  popupTitle: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  // onDelete(): void {
  //   //     this.jsonService.deleteRecord(record.id).subscribe((response: any) => {
  //   //   // console.log(response); // Handle the response after item deletion
  //   //   alert(record.gameName + ' has been deleted');
  //   //   location.reload();
  //   // });
  //   this.dialogRef.close();
  // }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
