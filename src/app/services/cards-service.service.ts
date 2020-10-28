import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsServiceService {

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<any> {

    const request = this.httpClient.get<any>('https://api.pokemontcg.io/v1/cards');

    return request;

  }
}
