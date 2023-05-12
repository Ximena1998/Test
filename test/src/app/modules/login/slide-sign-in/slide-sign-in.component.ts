import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-sign-in',
  templateUrl: './slide-sign-in.component.html',
  styleUrls: ['./slide-sign-in.component.scss']
})
export class SlideSignInComponent implements OnInit {
  asideSection = document.querySelector("aside");
   mainSection = document.querySelector("main");
  signInBtn = document.getElementById("login-btn");
 signUpBtn = document.getElementById("register-btn");
  constructor() { }

  ngOnInit(): void {

  }




  clickRight(){
    const buttonsSection = document.getElementById("buttons");
    const mainForm = document.getElementById("form");
    const signInBtn = document.getElementById("login-btn");
    if(buttonsSection && mainForm  &&  signInBtn)
    signInBtn.addEventListener("click", () => {
      mainForm .classList.add("slide-right");
      buttonsSection.classList.add("slide-left");
    });
  }
  clickLeft(){
    const buttonsSection = document.getElementById("buttons");
    const mainForm  = document.getElementById("form");
    const signUpBtn = document.getElementById("register-btn");
    if(buttonsSection && mainForm  &&  signUpBtn)
    signUpBtn.addEventListener("click", () => {
      mainForm .classList.remove("slide-right");
      buttonsSection.classList.remove("slide-left");
  
    });
  }






}
