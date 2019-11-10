import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserInfo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Variables
  
  // @Inputs()

  // @Outputs()

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Service call for getting all the portfolio data
    this.userService.getPortfolioData();
  }


}
