import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';

/*
Generated class for the ReminderDetail page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-reminder-detail',
	templateUrl: 'reminder-detail.html'
})
export class ReminderDetailPage {
	reminder: Reminder;

	constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingController: LoadingController) {
		this.reminder = this.navParams.data.reminder;
		console.log(this.reminder);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ReminderDetailPage');
		// console.log(this.reminder, this.navParams);
	}

	deleteReminder(){
		// console.log(this.reminder.key);
		let loader = this.loadingController.create({
				content: 'Please wait...',
			}),
			reminderList = this.af.database.list('/reminders');
		reminderList
			.remove(this.reminder.key)
			.then(() => {
				loader.dismiss();
				this.navCtrl.pop();
			},
			(error) => {

			});
	}

}
