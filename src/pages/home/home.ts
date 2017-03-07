import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';
import { ReminderDetailPage } from '../reminder-detail/reminder-detail';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Reminder } from '../../classes/reminder';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {
	message = "test2";

	reminderList:FirebaseListObservable<any[]>;
	reminderData:Reminder[];

	shouldShowEmptyState = true;
	showSpinner = true;

	bgcolors: string[] = ['#349ed1', '#b36595', '#234b9a', '#22dc7d', '#b4800d'];

	navigateToReminder = function(){
		this.navCtrl.push(AddReminderPage);
	};
	constructor(public navCtrl: NavController, public af: AngularFire) {
	}

	ionViewDidLoad(){
		this.reminderList = this.af.database.list('/reminders');

		this.reminderList.subscribe((data) => {
			this.reminderData = data.map((item) => {
				let reminder = Object.assign(new Reminder, item);
				reminder.key = item.$key;
				return reminder;
			});
			this.shouldShowEmptyState = this.reminderData.length === 0;
			this.showSpinner = false;
			console.log(this.reminderData);
		});
	}

	openDetailPage(detail: Reminder){
		this.navCtrl.push(ReminderDetailPage, {
			reminder: detail
		});
	}

}
