import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/json-service.service';
import { GameData } from 'src/app/game-data.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  addGame: GameData = new GameData;

  constructor( private router: Router, private jsonService: JsonService)
  {  }

  // getRecords()
  // {
  //   this.jsonService.getAllRecords().subscribe((items: GameData[]) => {
  //     console.log(items);
  //     // for (var record of items){

  //     // }
  //     this.addGame.copyObjectDetails(items);
  //     });

  // }

  
  gotodashboardpage(): void {
    this.router.navigate(['/dashboard']);
  }

  submitForm() {
        this.jsonService.addRecord(this.addGame).subscribe((response: any) => {
        // console.log(response); 
        alert("The Game has been added");
        this.clearForm();
        },
        (Error) =>{
          console.log("Here is the error: ", Error);
        }
        );
        }

  addNow(data:GameData){
    this.submitForm();
  }

  clearForm()
  {
    this.addGame = new GameData;
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

