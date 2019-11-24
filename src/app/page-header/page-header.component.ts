import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  // Variables

  // @Inputs()
  @Input() header: string;

  // @Outputs()

  constructor() { }

  ngOnInit() {
  }

}