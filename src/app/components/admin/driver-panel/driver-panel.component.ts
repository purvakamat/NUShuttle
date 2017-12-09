import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../../services/driver.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-driver-panel',
  templateUrl: './driver-panel.component.html',
  styleUrls: ['./driver-panel.component.css']
})
export class DriverPanelComponent implements OnInit {
  drivers: User[];
  userId: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  emailId: String;

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

  fetchDrivers() {
    return this.drivers;
  }

  /*createDriver(username, password, firstName, lastName, emailId) {
    const user = new User('', username, password, emailId, 'DRIVER');
    user.firstName = firstName;
    user.lastName = lastName;
    this.userService.createUser(user)
      .subscribe((ride1) => {
        if (ride1) {
          this.router.navigate(['/user/123/admin/driver-panel']);
        }
      });
  }*/
}
