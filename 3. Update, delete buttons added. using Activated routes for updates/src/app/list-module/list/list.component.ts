import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../../services/json-service.service';
import { GameData } from 'src/app/models/game-data.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  gameDataList: GameData[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jsonService: JsonService
  ) {}

  ngOnInit(): void {
    this.getGameRecords();
  } //private http: HttpClient

  // ngOnInit() {
  //   this.gameDataList = [
  //     { gname: 'Genshin Impact', gtitle:"Hoyoverse", cd:"500", gtype:"Open world", grating:"5", email: 'hoyoverse@abc.com'},
  //     { gname: 'Rocket League', gtitle:"Ufotable", cd:"300", gtype:"Racing", grating:"4", email: 'RL@abc.com'},
  //     { gname: 'Honkai Star Rail', gtitle:"Hoyoverse", cd:"450", gtype:"Open world", grating:"4", email: 'honkai@abc.com'},
  //     { gname: 'Two Player Games', gtitle:"Backgames", cd:"50", gtype:"Casual", grating:"3", email: 'tpg@abc.com'},

  //   ];
  //   //this.fetchData();
  // }
  gotodashboardpage(): void {
    this.router.navigate(['/dashboard']);
  }

  // fetchData() {
  //   this.http.get<any[]>('http://localhost:3000/data')
  //     .subscribe((response) => {
  //       this.data = response;
  //     });
  // }

  getGameRecords() {
    // Read operation: Retrieve all items
    this.jsonService.getAllRecords().subscribe((items: GameData[]) => {
      this.gameDataList = items;
    });
  }

  editButton(id: number) {
    //this.router.navigate(['/addgame', id]);
    this.router.navigate(['../add', id], { relativeTo: this.route });
  }

  deleteButton(record: GameData) {
    this.jsonService.deleteRecord(record.id).subscribe((response: any) => {
      // console.log(response); // Handle the response after item deletion
      alert(record.gameName + ' has been deleted');
      location.reload();
    });
  }

  //   add(){
  // // Create operation: Add a new item
  //   const newItem = {
  //     "id": 4,
  //     "gname": "asdf44",
  //     "gtitle": "jsasdfer44",
  //     "cdcost": "67444",
  //     "gtype" : "sadf44",
  //     "grating" : "5",
  //     "email" : "sdfkj@dskfn.com"
  //   };

  //   this.jsonService.addRecord(newItem).subscribe((response: any) => {
  //   console.log(response); // Handle the response after item creation
  //   alert(response);
  //   });
  //   }

  // update(){
  // // Update operation: Update an existing item

  // const updatedItem = {
  //   "id": 5,
  //   "gname": "asdf55",
  //   "gtitle": "jsasdfer55",
  //   "cdcost": "67455",
  //   "gtype" : "sadf55",
  //   "grating" : "5",
  //   "email" : "sdfkj@dskfn.com"
  // };
  // this.jsonService.updateRecord(updatedItem).subscribe((response: any) => {
  // console.log(response); // Handle the response after item update
  // alert(response);
  // });
  // }

  //   delete(){
  // // Delete operation: Remove an item
  //   const gname = "asd";
  //   this.jsonService.deleteRecord(gname).subscribe((response: any) => {
  //   console.log(response); // Handle the response after item deletion
  //   alert(response);
  // });
  // //   }
}
