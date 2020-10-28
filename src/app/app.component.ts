import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardsServiceService } from './services/cards-service.service';
import { splitArrayInSubarrays } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards = [];
  cardRows: any[];
  splitArrayInSubarrays = splitArrayInSubarrays;

  constructor(private cardsService: CardsServiceService) {

  }

  ngOnInit(): void {
    this.fetchCards();
  }

  fetchCards(): void {
    this.cardsService.getCards()
    .subscribe((resp) => {
      const cards = resp.cards as [];
      debugger
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);
      this.cards.push(...cards);

      console.log(this.cards.length);

      this.cardRows = this.splitArrayInSubarrays(this.cards, 5);
      debugger
    })
  }


  title = 'virtualized-grid';
}
