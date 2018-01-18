import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Angular2 Starter';

  constructor(private authService: AuthService) { }

  ngOnInit() {


 
  }
  onLogout() {
    this.authService.logout();
  }

}