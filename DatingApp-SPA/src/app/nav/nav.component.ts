import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  Login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('login is suc');
    }, error => {
      console.log('login is error');
    });
  }
  // tslint:disable-next-line: typedef
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
  }
}
