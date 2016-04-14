import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { AsyncPipe } from 'angular2/common';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { RxError } from '../models/rxError';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css'],
    pipes: [AsyncPipe]
})
export class DashboardComponent implements OnInit {

    errorMessage: RxError;
    heroes: any;

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    ngOnInit() {
        this.heroes = this._heroService.getHeroes();
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}