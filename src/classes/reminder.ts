import * as moment from 'moment';

export class Reminder {
	name: string;
	startDate: string;
	endDate: string;
	startTime: string;
	endTime: string;
	hasDuration: boolean;
	avatar: string;

	constructor(){
		let todayDate = moment();
		this.name = '';
		this.startDate = todayDate.format('YYYY-MM-DD');
		this.endDate = todayDate.format('YYYY-MM-DD');
		this.startTime = todayDate.format('HH:mm');
		this.endTime = todayDate.format('HH:mm');
		this.hasDuration = false;
		this.avatar = 'assets/images/clock.png';
	}

	getTotalDays(): number {
		let reminderEndDate = moment(this.endDate + ' ' + this.endTime);
		let reminderStartDate = new Date(this.startDate + ' ' + this.startTime);

		let totalDays = reminderEndDate.diff(reminderStartDate, 'days');

		return totalDays;
	}

	getLapsedDays(): number {
		let reminderStartDate = moment(this.startDate, this.startTime);
		let lapsedDays = moment(new Date()).diff(reminderStartDate, 'days');

		return lapsedDays;
	}

	getPercentage(): number {
		return Math.round(this.getLapsedDays()/this.getTotalDays() * 100);
	}
}
