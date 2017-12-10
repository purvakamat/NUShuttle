import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user.model.client";
import {UserService} from "../../../../services/user.service.client";
import {DriverService} from "../../../../services/driver.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-driver-new',
  templateUrl: './driver-new.component.html',
  styleUrls: ['./driver-new.component.css']
})
export class DriverNewComponent implements OnInit {
  drivers: User[];
  userId: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  verifyPassword: String;
  errorMsg: String;
  errorFlag: boolean;

  constructor(private userService: UserService,
              private driverService: DriverService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.driverService.findAllDrivers()
        .subscribe((drivers: User[]) => {
          this.drivers = drivers;
        });
    });
  }

  createDriver(username, password, verifyPassword, firstName, lastName, emailId) {
    if (verifyPassword !== password) {
      this.errorMsg = 'Passwords do not match!';
      this.errorFlag = true;
      return;
    } else {
      const user = new User('', username, password, emailId, 'DRIVER');
      user.firstName = firstName;
      user.lastName = lastName;
      this.userService.createUser(user)
        .subscribe((ride1) => {
          if (ride1) {
            this.router.navigate(['/user', this.userId, 'admin', 'drivers']);
          }
        });
    }
  }
}
