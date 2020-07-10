import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroUrl = '/api/hero';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    //return Array of type Hero
    return this.http.get<Hero[]>(this.heroUrl);
  }

  getSingleHero(id: number): Observable<Hero> {
    //return single value
    return this.http.get<Hero>(this.heroUrl +'/' +id);
  }
}
