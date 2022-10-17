import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreshCard } from '../fresh-card';
import { FreshCardService } from '../fresh-card.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  user:string ="";
  msg:string="";
  cards:Array<FreshCard>=[];
  constructor( public router:Router , public fs:FreshCardService) { }

  ngOnInit(): void {
    this.findAllProduct();
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
    }
  }
  findAllProduct() {
    this.fs.findAllProduct().subscribe({
      next:(result:any)=>this.cards=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  viewEmployee(employees:any){
    sessionStorage.setItem("productInfo",JSON.stringify(employees));
    this.router.navigate(["userHome"]);
  }
  deleteCard(id:number){
    //console.log(pid)
    this.fs.deleteProductById(id).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllProduct();   
      }
    })
  }
  passCard(id:number){
    //console.log(pid)
    this.fs.findAllProductById(id).subscribe({
      next:(result:any)=>this.msg="issued",
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.msg="issued";   
      }
    })
  }
  logout() {
    sessionStorage.removeItem("userDetails");
    this.router.navigate(["home"]);
  }
  

}
