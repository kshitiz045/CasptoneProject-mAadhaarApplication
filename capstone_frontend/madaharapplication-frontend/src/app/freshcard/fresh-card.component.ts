import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';

import { FreshCardService } from '../fresh-card.service';
@Component({
  selector: 'app-fresh-card',
  templateUrl: './fresh-card.component.html',
  styleUrls: ['./fresh-card.component.css']
})
export class FreshCardComponent implements OnInit {
  cardRef = new FormGroup({
    id:new FormControl(),
    type:new FormControl(),
    name:new FormControl(),
    dob:new FormControl(),
    address:new FormControl(),
    emailid:new FormControl(),
    number:new FormControl(),
    gender:new FormControl()
  })
  storeMsg :string =""
  constructor(public router:Router , public fs:FreshCardService) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(["userHome"]);
   }


   storeCardDetails() {
    let card = this.cardRef.value;
    this.fs.storeCardDetails(card).subscribe({
      next:(result:any)=>this.storeMsg="Aadhar Details Stored , pls wait for aahdar to be issued ",
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    
  }

}
