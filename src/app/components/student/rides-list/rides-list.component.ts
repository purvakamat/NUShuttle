import { Component, OnInit } from '@angular/core';
import {Ride} from "../../../models/ride.model.client";

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.css']
})
export class RidesListComponent implements OnInit {

  rides: Ride[];

  constructor() { }

  ngOnInit() {

  }

}
