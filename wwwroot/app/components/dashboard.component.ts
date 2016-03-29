import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { RxError } from '../models/rxError';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    errorMessage: RxError;
    heroes: Hero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService) {
    }

    ngOnInit() {
        this._heroService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes.slice(1, 5),
            function(error) {
                this.errorMessage = <any>error;
            });
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}