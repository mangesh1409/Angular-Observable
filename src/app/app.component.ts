import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs';
// import { compileNgModule } from '@angular/compiler';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ObservableHTTP';

  subscribeData: Hero[];
  asyncData: Observable<Hero[]>;
  singleData: Observable<Hero>;
  nameMapAsync: Observable<string>;
  nameMapSubscribe:string;

  constructor(private heroserve: HeroesService) { }

  ngOnInit(): void {
    // this.getWithSubscribe();
    // this.getWithAsyncPipe();
    this.getSingledata();
    this.getMapAsyncdata();
    this.getMapSubscribedata();
  }
  getWithSubscribe() {
    this.heroserve.getHeroes().subscribe((hero) => (this.subscribeData = hero));
  }
  getWithAsyncPipe() {
    this.asyncData = this.heroserve.getHeroes();
  }
  getSingledata() {
    this.singleData = this.heroserve.getSingleHero(3);
  }
  getMapAsyncdata() {
    this.nameMapAsync = this.heroserve.getSingleHero(5).pipe(map(hero => "Name: "+ hero.name));
  }
  getMapSubscribedata() {
    this.heroserve.getSingleHero(2).pipe(map(hero =>hero.name)).subscribe((name) => (this.nameMapSubscribe = name));
  }
}
