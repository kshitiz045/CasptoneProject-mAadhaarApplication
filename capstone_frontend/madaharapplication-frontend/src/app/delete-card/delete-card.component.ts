import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.css']
})
export class DeleteCardComponent implements OnInit {
  msg:String="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(["userHome"]);
   }
   
   deleteCardDetails(){
    
    this.msg = "Request to cancel aadhar card is in processing"
   }
}
