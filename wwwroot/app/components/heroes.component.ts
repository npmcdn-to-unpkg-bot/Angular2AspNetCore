import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { AsyncPipe } from 'angular2/common';

import { Hero } from '../models/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';
import { RxError } from '../models/rxError';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/html/heroes.component.html',
    styleUrls: ['app/css/heroes.component.css'],
    directives: [HeroDetailComponent],
    pipes: [AsyncPipe]
})
export class HeroesComponent implements OnInit {

    errorMessage: RxError;
    heroes: Observable<Hero>;
    selectedHero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService) { }

    ngOnInit() {
        this.heroes = this._heroService.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}