import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessAlertComponent implements OnInit {

  public message = 'Success!';

  constructor() {}

  ngOnInit() {
  }
}
