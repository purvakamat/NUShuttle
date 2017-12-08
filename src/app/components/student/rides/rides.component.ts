import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  userId: string;

  constructor() { }

  ngOnInit() {
    this.userId = "123";
  }

}
