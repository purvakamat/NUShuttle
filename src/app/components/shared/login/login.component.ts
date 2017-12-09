import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorFlag: boolean = false;
  errorMsg: string = "";

  @ViewChild('form') loginForm: NgForm;

  constructor(private router: Router,
              private userService: UserService) {  }

  ngOnInit() {
  }

  login(){
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/rides']);
        },
        (error: any) => {
          this.errorMsg = "Username and password do not match. Please enter the correct credentials";
          this.errorFlag = true;
        }
      );
  }
}




