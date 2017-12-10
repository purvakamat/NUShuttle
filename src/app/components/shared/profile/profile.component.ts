import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user.service.client';
import { User} from '../../../models/user.model.client';
import { Router } from '@angular/router';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  role: String;
  username: String;
  email: String;
  firstname: String;
  lastname: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.role = this.user.role;
    this.username = this.user.username;
    this.firstname = this.user.firstName;
    this.lastname = this.user.lastName;
    this.email = this.user.emailId;
  }

  updateUser() {
    this.user.role = this.role;
    this.user.username = this.username;
    this.user.firstName = this.firstname;
    this.user.lastName = this.lastname;
    this.user.emailId = this.email;

    this.userService.updateUser(this.user._id, this.user)
      .subscribe((data) => {
        this.sharedService.user = this.user;
      });
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id)
      .subscribe((user) => {
        this.router.navigate(['/login']);
      });
  }

  logout() {
    this.userService.logout().subscribe((res) => {
        this.router.navigate(['/login']);
      });
  }

  backToPrevPage(){
    if(this.user){
      switch(this.user.role) {
        case 'STUDENT':
          this.router.navigate(['/rides']);
          break;
        case 'DRIVER':
          this.router.navigate(['/driver']);
          break;
        case 'ADMIN':
          this.router.navigate(['/admin-schedules']);
          break;
        default:{
          this.userService.logout().subscribe((res) => {
            this.router.navigate(['/login']);
          });
        }
      }
    }
  }
}
