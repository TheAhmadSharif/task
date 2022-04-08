import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  initial_percentage: any = 25;
  block_list = [1, 2];

  constructor() { }

  ngOnInit(): void {
  }

  changePercentage(event:any, value:any):void {
      event.preventDefault();
      this.initial_percentage = this.initial_percentage + value;
      if(this.initial_percentage > 100) {
        this.initial_percentage = 100;
      }
      if(this.initial_percentage < 1) {
        this.initial_percentage = 0;
      }
  }

}
