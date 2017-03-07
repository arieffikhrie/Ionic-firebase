import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
Generated class for the Avatars provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
	*/
@Injectable()
export class Avatars {
	avatars:Array<string>;

	constructor() {
		this.avatars = [
			'assets/images/backpack.png',
			'assets/images/ball.png',
			'assets/images/basketball.png',
			'assets/images/bear.png',
			'assets/images/beer.png',
			'assets/images/book.png',
			'assets/images/box.png',
			'assets/images/cake.png',
			'assets/images/camera.png',
			'assets/images/cat.png',
			'assets/images/clock.png',
			'assets/images/cloud.png',
			'assets/images/game.png',
			'assets/images/gift.png',
			'assets/images/graduation.png',
			'assets/images/mastercard.png',
			'assets/images/moneybag.png',
			'assets/images/movie.png',
			'assets/images/rainbow.png',
			'assets/images/rice.png',
			'assets/images/spaghetti.png',
			'assets/images/sun.png',
			'assets/images/syringe.png',
			'assets/images/throphy.png'
		];
	}

	get(){
		return this.avatars;
	}

	getRowCol(maxCol?:number){
		if ( maxCol == null ) maxCol = 6;
		let totalAvatar = this.avatars.length;
		let row = Math.ceil(totalAvatar/maxCol);
		let arr = [];
		for( let i = 0; i < row; i++ ){
			arr.push(this.avatars.splice(0, maxCol));
		}
		// 0 6
		// 7 12
		// 13 18
		// 19 24
		return arr;
	}

}
