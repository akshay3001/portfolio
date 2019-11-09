import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserInfo } from '../model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // Variables
  portfolioData: UserInfo;
  pageHeader: string;
  
  // @Inputs()

  // @Outputs()

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userData$
      .subscribe((portfolio: UserInfo) => {
        console.log('Portfolio data in Projects Component:', portfolio);
        this.portfolioData = portfolio;
        this.pageHeader = this.portfolioData.tabs.third;
      },
        ((error: any) => {
          console.log(error);
        })
      );
  }

}
