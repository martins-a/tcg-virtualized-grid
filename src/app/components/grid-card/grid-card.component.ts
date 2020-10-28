import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent implements OnInit {

  constructor() { }

  @Input()
  title: string = "Placeholder";

  @Input()
  bodyText: string = "Placeholder";

  @Input()
  imageUrl: string;

  @Input()
  colors: any;

  ngOnInit(): void {
    console.log(this.colors);
  }

}
