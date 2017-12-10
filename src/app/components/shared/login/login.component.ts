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
      .subscribe((user: any) => {
          if(user.role == 'STUDENT')
            this.router.navigate(['/rides']);
          else if(user.role == 'DRIVER')
            this.router.navigate(['/driver']);
          else if(user.role == 'ADMIN')
            this.router.navigate(['/admin-schedules']);
          else{
            this.userService.logout().subscribe((res) => {
              this.router.navigate(['/login']);
            });
          }
        },
        (error: any) => {
          this.errorMsg = "Username and password do not match. Please enter the correct credentials";
          this.errorFlag = true;
        }
      );
  }
}




