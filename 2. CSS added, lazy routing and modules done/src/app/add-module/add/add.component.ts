import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/services/json-service.service';
import { GameData } from 'src/app/models/game-data.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  addGame: GameData = new GameData();

  constructor(private router: Router, private jsonService: JsonService) {}

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

  // getRecords()
  // {
  //   this.jsonService.getAllRecords().subscribe((items: GameData[]) => {
  //     console.log(items);
  //     // for (var record of items){

  //     // }
  //     this.addGame.copyObjectDetails(items);
  //     });

  // }

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
    this.jsonService.addRecord(this.addForm.value).subscribe(
      (response: any) => {
        // console.log(response);
        alert('The Game has been added');
        this.clearForm();
      },
      (Error) => {
        console.log('Here is the error: ', Error);
      }
    );
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

    this.submitForm();
  }

  clearForm() {
    //this.addGame = new GameData();
    this.addForm.reset();
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
