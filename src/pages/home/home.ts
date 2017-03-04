import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	message = "test2";

	shouldShowEmptyState = true;

	navigateToReminder = function(){
		this.navCtrl.push(AddReminderPage);
		// this.shouldShowEmptyState = !this.shouldShowEmptyState;
	};
	constructor(public navCtrl: NavController) {
		this.navCtrl.push(AddReminderPage);

	}

}
