import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';

/*
Generated class for the AddReminder page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-add-reminder',
	templateUrl: 'add-reminder.html',
})
export class AddReminderPage {
	reminder: Reminder;

	constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingController: LoadingController, public toastController: ToastController) {
		this.reminder = new Reminder;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddReminderPage');
	}

	createReminder(){
		// console.log(this.reminder);

		let loader = this.loadingController.create({
				content: 'Please wait...',
			}),
			reminderList = this.af.database.list('/reminders');

		loader.present();
		reminderList
			.push(this.reminder)
			.then(() => {
				loader.dismiss();
				this.navCtrl.pop();
			},
			(error) => {
				loader.dismiss();
				this.navCtrl.pop();
				this.toastController.create({
					position: 'bottom',
					message: 'Failed to create new reminder',
					duration: 2500,
				}).present();

			});
	}
}
