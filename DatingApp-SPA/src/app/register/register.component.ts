import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  register() {
    console.log(this.model);
  }
  // tslint:disable-next-line: typedef
  cancel() {
    console.log('cancelled');
  }
}
