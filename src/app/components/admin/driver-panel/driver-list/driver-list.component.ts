import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {UserService} from '../../../../services/user.service.client';
import {DriverService} from '../../../../services/driver.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
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
}
