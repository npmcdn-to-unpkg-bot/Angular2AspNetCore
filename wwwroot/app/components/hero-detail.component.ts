import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES, Router } from 'angular2/router';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/html/hero-detail.component.html',
    styleUrls: ['app/css/hero-detail.component.css'],
    inputs: ['hero'],
    directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private _router: Router,
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        // +this converts value to numeric
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .subscribe(
            hero => this.hero = hero,
            error => this.errorMessage = <any>error);
    }
}