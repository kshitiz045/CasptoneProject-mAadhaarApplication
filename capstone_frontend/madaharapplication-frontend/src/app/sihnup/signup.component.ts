import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }


  ngOnInit(): void {
  }

  signUp(){
    let logu = this.signupRef.value;
    console.log(logu);
    this.ls.signUp(logu).subscribe({
      next:(result:any)=>{
        if(result=="User registered successfully"){
            sessionStorage.setItem("userDetails",logu.emailid);
            this.router.navigate(["login"])
        }else if(result == "User id must be unique , pls try again"){
            this.msg = "User id must be unique , pls try again";
        }else if(result == "create user account only , not admin"){
          this.msg = "select user as type of user if you are not admin";
      }
        else {
            this.msg="invalid";
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
