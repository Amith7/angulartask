import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = " Log in Your Account"
  place = "Enter your Email Id  "
  email = "";
  pswd = "";

  //DataBase
  userDetails: any = {
    1: { username: "Amal", email: "amal@123", password: "amal@123" },
    2: { username: "malu", email: "malu@123", password: "malu@123" },
  }
  constructor() { }

  ngOnInit(): void {
  }

  emailId(event: any) {
    console.log(event);
    this.email = event.target.value;
    console.log(this.email)
  }
  pswdChange(event: any) {
    console.log(event);
    this.pswd = event.target.value;
    console.log(this.pswd)
  }

  login() {
    var email = this.email;
    var pswd = this.pswd;
    var userDetails = this.userDetails;
    console.log(email);
    if (email in userDetails) {
      if (pswd == userDetails[email]['password']) {
        alert("Success")
      } else {
        alert("invalid password")
      }
    } else {
      alert("Invalid user details")
    }


  }

}
