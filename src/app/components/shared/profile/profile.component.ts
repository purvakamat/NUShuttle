import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
  userId: String;
  user: User;
  username: String;
  emailId: String;
  firstName: String;
  lastName: String;
  type: String;
  pickup: String;
  dropoff: String;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user._id;
    this.username = this.user.username;
    this.emailId = this.user.emailId;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.type = this.user.role;
  }

  updateUser(userName: String, emailId: String, firstName: String, lastName: String) {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.emailId = this.emailId;
    this.user.username = this.username;

    this.userService.updateUser(this.userId, this.user)
      .subscribe((user) => {
        this.user = user;
        this.sharedService.user = this.user;
      });
  }

  deleteUser(userId: String) {
    this.userService
      .deleteUser(this.userId)
      .subscribe((user) => {
        this.router.navigate(['/login']);
      });
  }
}
