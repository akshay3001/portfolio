import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  // Variables
  portfolioData: UserInfo;
  pageHeader: string;
  
  // @Inputs()

  // @Outputs()

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userData$
      .subscribe((portfolio: UserInfo) => {
        console.log('Portfolio data in Research Component:', portfolio);
        this.portfolioData = portfolio;
        this.pageHeader = this.portfolioData.tabs.first;
      },
        ((error: any) => {
          console.log(error);
        })
      );
  }

}
