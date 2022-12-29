import { NotificationType } from "@/interfaces/INotification"
import { NOTIFY } from "@/store/mutations-type"
import { store } from "@/store"

export const notificationMixin = {
	methods: {
		notify(title: string, text: string, type: NotificationType): void {
			store.commit(NOTIFY, {
				title,
				text,
				type
			})
		}
	}
}