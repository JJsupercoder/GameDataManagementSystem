import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameData } from 'src/app/models/game-data.model';
import { JsonIdHandlingService } from 'src/app/services/json-id-handling.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/Components/popup/popup.component';
import { SqlConnectService } from 'src/app/services/sql-connect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  gameDataList: GameData[] = [];
  displayMsg: string = 'Are you sure want to delete this record?';
  popupTitle: string = 'Delete Record';

  constructor(
    private router: Router,
    private sqlService: SqlConnectService,
    private idService: JsonIdHandlingService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getGameRecords();
  }

  gotodashboardpage(): void {
    this.router.navigate(['/dashboard']);
  }

  getGameRecords() {
    this.sqlService.getAllRecords().subscribe((result: GameData[]) => {
      this.gameDataList = result.sort((a, b) => {
        if (a.gameName === b.gameName) {
          return a.gameRating < b.gameRating ? 1 : -1;
        }
        return a.gameName > b.gameName ? 1 : -1;
      });
    });
  }

  editButton(id: string) {
    this.idService.setId(id);
    this.router.navigate(['/add']);
  }

  deleteButton(record: GameData) {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: { popupTitle: this.popupTitle, displayMsg: this.displayMsg },
    });

    dialogRef.afterClosed().subscribe((shouldDelete) => {
      if (shouldDelete) {
        this.sqlService.deleteRecord(record.id).subscribe((response: any) => {
          location.reload();
        });
      }
    });
  }
}
