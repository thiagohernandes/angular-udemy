import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  novo() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  edit() {
    this.router.navigate([2, 'edit'], {relativeTo: this.route});
  }

}
