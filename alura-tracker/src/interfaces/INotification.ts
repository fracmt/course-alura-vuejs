export enum NotificationType {
	SUCCESS,
	ALERT,
	FAIL
}

export interface INotification {
	title: string
	text: string
	type: NotificationType,
	id: number
}