import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	animations: [
	trigger('myAwesomeAnimation', [
		state('small', style({
			transform: 'scale(1)',
		})),
		state('large', style({
			transform: 'scale(1.2)',
		})),
		transition('small <=> large', animate('300ms ease-in', keyframes([
			style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
			style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
			style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
			]))),

		state('visible', style({
			opacity: 1
		})),
		state('invisible', style({
			opacity: 0
		})),
		
		transition('visible => invisible', animate('0.5s')),

		state('inactive', style({
			backgroundColor: '#eee',
			transform: 'scale(1)'
		})),
		state('active',   style({
			backgroundColor: '#cfd8dc',
			transform: 'scale(1.1)'
		})),
		transition('inactive => active', animate('100ms ease-in')),
		transition('active => inactive', animate('100ms ease-out'))
		]),
	]
})

export class HomePage {

	private _users=['Usuario 1','Usuario 2','Usuario 3','Usuario 4','Usuario 5','Usuario 6'];
	state: string = 'visible';

	constructor(public navCtrl: NavController) {

	}

	deleteElement(aUser){
		console.log(aUser);
		this.animateMe();
		this._users = this._users.filter(obj => obj !== aUser);
	}

	animateMe() {
		this.state = (this.state === 'visible' ? 'invisible' : 'visible');
	}

}
