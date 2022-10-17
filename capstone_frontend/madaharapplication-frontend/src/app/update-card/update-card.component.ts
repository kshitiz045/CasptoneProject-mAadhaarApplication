import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreshCardService } from '../fresh-card.service';
import {FormGroup,FormControl} from '@angular/forms';
import { FreshCard } from '../fresh-card';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {
  cards:Array<FreshCard>=[];
  storeMsg:String="";
  constructor(public router:Router , public fs:FreshCardService) { }

  ngOnInit(): void {
  }
  flag:boolean = false;
  id:number =0;
  emailid:string ="";
  address:string ="";
  number:number =0;

  goBack(){
    this.router.navigate(["userHome"]);
   }


   updateCard(freshcard:any){
    this.flag= true;
  
    this.address=freshcard.address;
    this.number=freshcard.number;
    this.emailid=freshcard.emailid;
}
msg:string="";
updateCardDetails(){
  let product = {id:this.id,address:this.address,emailid:this.emailid,number:this.number};
  this.fs.updateCardDetails(product).subscribe({
    next:(result:any)=>{
      if(result == "Details updated successfully"){
        this.msg = "Aadhar Details updated successfully , pls wait for aadhar to be updated"
      }
    },
    error:(error:any)=>console.log(error),
    complete:()=>{
        console.log("yes"); 
    }
  })
  this.flag=false;
}
// updateProduct(product:any){
//   // this.flag= true;
//   this.id=product.pid;
//   this.emailid=product.name;
//   this.address=product.address;
//   this.number = product.number;
// }
// updateDataFromDb(){
//   let product = {id:this.id,emailid:this.emailid,address:this.address,number:this.number};
//   this.fs.updateCardDetails(product).subscribe({
//     next:(result:any)=>console.log(result),
//     error:(error:any)=>console.log(error),
//     complete:()=>{
//         console.log("yes")  
//     }
//   })
  
// }

}
