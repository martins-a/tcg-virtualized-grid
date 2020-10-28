import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {

  @Input()
  cards: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
