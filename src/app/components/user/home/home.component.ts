import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import { UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>  {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          this.user = user;
          this.username = user.username;
          this.emailId = user.emailId;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.type = user.type;
          this.pickup = user.pickup;
          this.dropoff = user.dropoff;
        });
    });
  }

}
