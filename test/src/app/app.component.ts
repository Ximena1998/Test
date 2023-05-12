import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickRight() {
    const buttonsSection = document.getElementById("buttons");
    const mainForm = document.getElementById("form");
    const signInBtn = document.getElementById("login-btn");
    if (buttonsSection && mainForm && signInBtn)
      signInBtn.addEventListener("click", () => {
        mainForm.classList.add("slide-right");
        buttonsSection.classList.add("slide-left");
      });
  }
  clickLeft() {
    const buttonsSection = document.getElementById("buttons");
    const mainForm = document.getElementById("form");
    const signUpBtn = document.getElementById("register-btn");
    if (buttonsSection && mainForm && signUpBtn)
      signUpBtn.addEventListener("click", () => {
        mainForm.classList.remove("slide-right");
        buttonsSection.classList.remove("slide-left");
      });
  }
}
