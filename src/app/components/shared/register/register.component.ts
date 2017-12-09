import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../services/shared.service";
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorFlag: boolean = false;
  errorMsg: string = "";

  @ViewChild('f') registerForm: NgForm;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) { }

  ngOnInit() {
  }

  register(){
    var username = this.registerForm.value.username;
    var password = this.registerForm.value.password;
    var ver_password = this.registerForm.value.verifypassword;
    var email = this.registerForm.value.email;
    var role = "STUDENT";

    if(password != ver_password){
      this.errorMsg = "The passwords do not match. Please re-enter the passwords."
      this.errorFlag = true;
    }
    else{
      var user = new User('', username, password, email, role);
      this.userService.register(user).subscribe((user: User) => {
            if(user.role == 'STUDENT')
              this.router.navigate(['/rides']);
            else if(user.role == 'DRIVER')
              this.router.navigate(['/user',user._id,'driver']);
            else if(user.role == 'ADMIN')
              this.router.navigate(['/user', user._id,'admin', 'schedules']);
            else{
              this.userService.logout().subscribe((res) => {
                this.router.navigate(['/login']);
              });
            }
          },
          (error: any) => {
            this.errorMsg = error._body;
            this.errorFlag = true;
          }
        );
    }
  }
}
