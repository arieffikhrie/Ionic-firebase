import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { AvatarsComponent } from '../components/avatars/avatars';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { AngularFireModule } from 'angularfire2';
import { ReminderDetailPage } from '../pages/reminder-detail/reminder-detail';

export const firebaseConfig = {
    apiKey: "AIzaSyDmPplAiF0MqrrH8AGgV-eQJAhxRl6Srt0",
    authDomain: "ionic-firebase-58b6c.firebaseapp.com",
    databaseURL: "https://ionic-firebase-58b6c.firebaseio.com",
    storageBucket: "ionic-firebase-58b6c.appspot.com",
    messagingSenderId: "891843303248"
};

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		AddReminderPage,
		AvatarsComponent,
		ProgressBarComponent,
		ReminderDetailPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	bootstrap: [IonicApp],
		entryComponents: [
		MyApp,
		HomePage,
		AddReminderPage,
		AvatarsComponent,
		ProgressBarComponent,
		ReminderDetailPage
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
