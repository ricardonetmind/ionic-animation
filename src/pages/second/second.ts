import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { trigger,state,style,transition,animate,keyframes,sequence } from '@angular/animations';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-second',
 	templateUrl: 'second.html',
 	animations: [
 	trigger('anim', [
 		transition('* => void', [
 			style({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'}),
 			sequence([
 				animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
 				animate(".1s ease", style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
 				])
 			]),
 		transition('void => active', [
 			style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
 			sequence([
 				animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
 				animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'  }))
 				])
 			])
 		])
 	],
 })
 export class SecondPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	items: any[] = [
	 	{ name: 'Element 1' },
	 	{ name: 'Element 2' },
	 	{ name: 'Element 3' },
	 	{ name: 'Element 4' },
	 	{ name: 'Element 5' },
	 	{ name: 'Element 6' }
 	];

 	push() {
 		this.items.splice(1, 0, { name: 'New element', state: 'active' });
 	}

 	remove(index) {
 		this.items.splice(index, 1);
 	}

 }
