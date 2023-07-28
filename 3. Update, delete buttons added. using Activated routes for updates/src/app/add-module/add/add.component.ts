import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json-service.service';
import { GameData } from 'src/app/models/game-data.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addGame: GameData = new GameData();
  id!: number;
  editingMode: boolean = false;
  buttonText!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jsonService: JsonService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      //console.log('ID is: ' + this.id);
      if (typeof this.id !== 'undefined') {
        this.getGameRecordAndUpdateForm(this.id);
        this.editingMode = true;
      }
    });

    if (!this.editingMode) {
      this.buttonText = 'Submit';
    } else {
      this.buttonText = 'Update';
    }
  }

  addForm = new FormGroup({
    gameName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9]+$'),
    ]),
    gameTitle: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9]+$'),
    ]),
    gameRating: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-5]'),
    ]),
    cdCost: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    gameType: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z1-9]+$'),
    ]),
    creatorEmail: new FormControl('', [Validators.required, Validators.email]),
  });

  getGameRecordAndUpdateForm(id: number) {
    this.jsonService.getRecord(id).subscribe((item) => {
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

  gotodashboardpage(): void {
    this.router.navigate(['/dashboard']);
  }

  submitForm() {
    this.jsonService.addRecord(this.addForm.value).subscribe({
      next: (response: any) => {
        //console.log(response);
        alert(this.addGame.gameName + ' has been added');
        this.clearForm();
      },
      error: (error: any) => {
        console.log('Here is the error: ', error);
      },
    });
  }

  // submitForm() {
  //   this.jsonService.addRecord(this.addForm.value).subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       alert(this.addGame.gameName + 'has been added');
  //       this.clearForm();
  //     },
  //     (Error) => {
  //       console.log('Here is the error: ', Error);
  //     }
  //   );
  // }

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
    this.jsonService.updateRecord(this.id, this.addGame).subscribe(
      (response: any) => {
        // console.log(response);
        alert(this.addGame.gameName + ' has been updated');
        this.clearForm();
        this.router.navigate(['/list']);
      },
      (Error) => {
        console.log('Here is the error: ', Error);
      }
    );
  }

  clearForm() {
    //this.addGame = new GameData();

    if (this.editingMode) {
      let preGameName = this.addForm.value.gameName as string;
      this.addForm.reset();
      this.addForm.patchValue({ gameName: preGameName });
    } else {
      this.addForm.reset();
    }
  }
}

//

// export class LoginComponent {
//   checkoutForm = this.formBuilder.group({
//     username: '',
//     password: ''
//   });

//   constructor(
//     private formBuilder: FormBuilder, private router: Router) {
//     }

//   onSubmit(): void {
//     // Process checkout data here
//     // this.items = this.cartService.clearCart();
//     console.warn('Your order has been submitted', this.checkoutForm.value);
//     this.checkoutForm.reset();
//     // if (this.checkoutForm.value.password == "123" && this.checkoutForm.value.username == 'jenson')
//     // {
//     this.router.navigate(['/dashboard']);
//   // }
//   }

// }
