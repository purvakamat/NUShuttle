import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {UserService} from '../../../../services/user.service.client';
import {DriverService} from '../../../../services/driver.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  drivers: User[];
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;
  driverId: String;
  driver: User;
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

      this.driverId = params['did'];
      this.userService.findUserById(this.driverId)
        .subscribe((user) => {
          this.driver = user;
          this.username = this.driver.username;
          this.password = this.driver.password;
          this.verifyPassword = this.driver.password;
          this.firstName = this.driver.firstName;
          this.lastName = this.driver.lastName;
          this.emailId = this.driver.emailId;
        });
      this.driverService.findAllDrivers()
        .subscribe((drivers: User[]) => {
          this.drivers = drivers;
        });
    });
  }

  updateDriver(username, password, verifyPassword, firstName, lastName, emailId) {
    if (this.validateUsername(username) === false) {
      this.errorMsg = 'Username cannot be empty!';
      this.errorFlag = true;
      return;
    }
    if (this.validatePassword(password) === false) {
      this.errorMsg = 'Password cannot be empty!';
      this.errorFlag = true;
      return;
    }
    if (this.validateFirstName(firstName) === false) {
      this.errorMsg = 'Please enter first name!';
      this.errorFlag = true;
      return;
    }
    if (this.validateLastName(lastName) === false) {
      this.errorMsg = 'Please enter last name!';
      this.errorFlag = true;
      return;
    }
    if (verifyPassword !== password) {
      this.errorMsg = 'Passwords do not match!';
      this.errorFlag = true;
      return;
    } else {
      const user = new User(this.driverId, username, password, emailId, 'DRIVER');
      user.firstName = firstName;
      user.lastName = lastName;
      this.userService.updateUser(this.driverId, user)
        .subscribe((ride1) => {
          if (ride1) {
            this.router.navigate(['/admin-drivers']);
          }
        });
    }
  }

  deleteDriver() {
    this.userService.deleteUser(this.driverId)
      .subscribe((drivers) => {
        this.drivers = drivers;
        this.router.navigate(['/admin-drivers']);
      });
  }

  validateUsername(username) {
    if ((username === '') || (username === null) || (username === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validatePassword(password) {
    if ((password === '') || (password === null) || (password === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateFirstName(firstName) {
    if ((firstName === '') || (firstName === null) || (firstName === undefined)) {
      return false;
    } else {
      return true;
    }
  }

  validateLastName(lastName) {
    if ((lastName === '') || (lastName === null) || (lastName === undefined)) {
      return false;
    } else {
      return true;
    }
  }
}
