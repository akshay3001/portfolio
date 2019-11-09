import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Variables
  portfolioData: UserInfo;
  
  // @Inputs()

  // @Outputs()

  constructor(private userService: UserService) { }

  /**
   * on init angular lifecycle hook
   */
  ngOnInit() {
    this.userService.userData$
      .subscribe((portfolio: UserInfo) => {
        console.log('Portfolio data in Home Component:', portfolio);
        this.portfolioData = portfolio;
      },
        ((error: any) => {
          console.log(error);
        })
      );
  }

  /**
   * Open Socials media links in new tab
   * @param url 
   */
  socialMedia(url: string) {
    window.open(url, '_blank');
  }

}
