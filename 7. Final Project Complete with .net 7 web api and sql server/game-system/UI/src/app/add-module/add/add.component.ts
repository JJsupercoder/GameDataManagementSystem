import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SqlConnectService } from 'src/app/services/sql-connect.service';
import { GameData } from 'src/app/models/game-data.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonIdHandlingService } from 'src/app/services/json-id-handling.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addGame: GameData = new GameData();
  id!: string;
  editingMode: boolean = false;
  buttonText!: string;

  constructor(
    private router: Router,
    private sqlconnect: SqlConnectService,
    private idService: JsonIdHandlingService
  ) {}
  ngOnInit(): void {
    this.id = this.idService.getId();

    if (typeof this.id !== 'undefined') {
      this.editingMode = true;
      this.buttonText = 'Update';
    } else {
      this.buttonText = 'Submit';
    }
    if (this.editingMode === true) {
      this.getGameRecordAndUpdateForm(this.id);
    }
  }

  addForm = new FormGroup({
    gameName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+[a-zA-Z1-9 ]*$'),
    ]),
    gameTitle: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+[a-zA-Z1-9 ]*$'),
    ]),
    gameRating: new FormControl('', [
      Validators.required,
      Validators.pattern('([0-5](.[0-9])?)'),
    ]),
    cdCost: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    gameType: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+[a-zA-Z1-9 ]*$'),
    ]),
    creatorEmail: new FormControl('', [Validators.required, Validators.email]),
  });

  getGameRecordAndUpdateForm(id: string) {
    this.sqlconnect.getRecord(id).subscribe((item) => {
      this.addGame = item;
      this.addForm.patchValue({
        gameName: this.addGame.gameName,
        gameTitle: this.addGame.gameTitle,
        gameRating: this.addGame.gameRating as unknown as string,
        cdCost: this.addGame.cdCost as unknown as string,
        gameType: this.addGame.gameType,
        creatorEmail: this.addGame.creatorEmail,
      });
    });
  }

  get game_name() {
    return this.addForm.get('gameName');
  }
  get game_title() {
    return this.addForm.get('gameTitle');
  }
  get game_rating() {
    return this.addForm.get('gameRating');
  }
  get cd_cost() {
    return this.addForm.get('cdCost');
  }
  get creator_email() {
    return this.addForm.get('creatorEmail');
  }
  get game_type() {
    return this.addForm.get('gameType');
  }

  backButton(): void {
    if (this.editingMode) {
      this.idService.setId(undefined);
    }
    this.router.navigate(['/dashboard']);
  }

  submitForm() {
    this.sqlconnect.addRecord(this.addGame).subscribe({
      next: (response: any) => {
        alert(this.addGame.gameName + ' has been added');
        this.clearForm();
      },
      error: (error: any) => {
        console.log('Here is the error: ', error);
      },
    });
  }

  addNow() {
    if (this.addForm.value.gameName) {
      this.addGame.gameName = this.addForm.value.gameName;
    }
    if (this.addForm.value.gameTitle) {
      this.addGame.gameTitle = this.addForm.value.gameTitle;
    }
    if (this.addForm.value.gameRating) {
      this.addGame.gameRating = parseFloat(this.addForm.value.gameRating);
    }
    if (this.addForm.value.gameType) {
      this.addGame.gameType = this.addForm.value.gameType;
    }
    if (this.addForm.value.cdCost) {
      this.addGame.cdCost = parseFloat(this.addForm.value.cdCost);
    }
    if (this.addForm.value.creatorEmail) {
      this.addGame.creatorEmail = this.addForm.value.creatorEmail;
    }

    if (!this.editingMode) {
      this.submitForm();
    } else {
      this.updateForm();
    }
  }

  updateForm() {
    this.sqlconnect.updateRecord(this.addGame).subscribe(
      (response: any) => {
        alert(this.addGame.gameName + ' has been updated');
        this.clearForm();
        this.idService.setId(undefined);

        this.router.navigate(['/list']);
      },
      (Error) => {
        console.log('Here is the error: ', Error);
      }
    );
  }

  clearForm() {
    if (this.editingMode) {
      let preGameName = this.addForm.value.gameName as string;
      this.addForm.reset();
      this.addForm.patchValue({ gameName: preGameName });
    } else {
      this.addForm.reset();
    }
  }
}
