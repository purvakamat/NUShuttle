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

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user)
      .subscribe((data) => {
        this.user = data;
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
          this.router.navigate(['/user',this.user._id,'driver']);
          break;
        case 'ADMIN':
          this.router.navigate(['/user', this.user._id,'admin', 'schedules']);
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
