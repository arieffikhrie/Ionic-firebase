import * as moment from 'moment';

export class Reminder {
	key: string;
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

	getStartDateTimeObject(){
		return moment(this.startDate + ' ' + this.startTime);
	}
	getEndDateTimeObject(){
		return moment(this.endDate + ' ' + this.endTime);
	}

	getTotalDays(): number {
		let reminderEndDate = this.getEndDateTimeObject();
		let reminderStartDate = this.getStartDateTimeObject();

		return reminderEndDate.diff(reminderStartDate, 'hours');
	}

	getLapsedDays(): number {
		let todayDate = moment(new Date());
		let reminderStartDate = this.getStartDateTimeObject();
		return todayDate.diff(reminderStartDate, 'hours');
	}

	getPercentage(): number {
		if ( this.getTotalDays() === 0 ) return 0;
		return Math.round(this.getLapsedDays()/this.getTotalDays() * 100);
	}

	getTodayDate(){
		return moment(new Date);
	}
}
