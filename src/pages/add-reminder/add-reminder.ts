import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';

/*
Generated class for the AddReminder page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-add-reminder',
	templateUrl: 'add-reminder.html'
})
export class AddReminderPage {
	reminder: Reminder;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.reminder = new Reminder;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddReminderPage');
	}

	createReminder(){
		console.log(this.reminder);
	}
}
