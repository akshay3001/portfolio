import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Variables
  today = new Date();
  
  // @Inputs()

  // @Outputs()

  constructor() { }

  ngOnInit() {
  }

}
