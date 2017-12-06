import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = User;
  showError: Boolean;
  username: String;
  password: String;
  verifyPassword: String;
  emailId: String;
  type: String;
  constructor(private userService: UserService, private  router: Router) { }

  ngOnInit() {
    this.showError = false;
  }

  createUser(username: String, password: String, verifyPassword: String, emailId: String, type: String) {
    console.log(type);
    this.username = username;
    this.password = password;
    this.verifyPassword = verifyPassword;
    this.emailId = emailId;
    if (password === verifyPassword) {
      const tempUser = new User('', username, password, emailId, type);
      this.userService
        .findUserByUsername(username)
        .subscribe((user) => {
          if  (user === null) {
            this.userService
              .createUser(tempUser)
              .subscribe((newUser) => {
                this.user = newUser;
                console.log(this.user);
              });
          }else {
            this.showError = true;
            return;
          }
          this.router.navigate(['/login']);
        });
    }
  }


}
