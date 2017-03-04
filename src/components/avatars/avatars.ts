import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Avatars } from '../../providers/avatars';

/*
Generated class for the Avatars component.

See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
for more info on Angular 2 Components.
	*/
@Component({
	selector: 'avatars',
	templateUrl: 'avatars.html',
	providers: [Avatars],
})
export class AvatarsComponent {
	avatarsList: Array<Array<string>>;

	@Input() src = '';
	@Output() srcChange = new EventEmitter();

	updateAvatar(event){
		this.src = event.target.src;
		this.srcChange.emit(this.src);
	}
	constructor(public _avatars: Avatars) {
		this.avatarsList = _avatars.getRowCol();
		this.src = this.avatarsList[0][0];
	}
}
