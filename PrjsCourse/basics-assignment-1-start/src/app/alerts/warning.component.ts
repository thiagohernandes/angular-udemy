import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningAlertComponent implements OnInit {

  public message = 'Warning!';

  constructor() {}

  ngOnInit() {
  }
}
