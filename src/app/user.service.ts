import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserInfo } from './model';

import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://akshay3001.github.io/portfolio-data/index.json';
  private userData = new ReplaySubject(1);
  userData$: Observable<any> = this.userData.asObservable();
  tabs: any;

  constructor(private http: HttpClient) { }

  /**
   * Gets portfolio data
   * @returns portfolio data 
   */
  getPortfolioData() {
    const portfolio: Observable<UserInfo> = this.http.get<UserInfo>(this.url);
    portfolio.subscribe(portfolio => {
      this.userData.next(portfolio);
    });
  }

}
