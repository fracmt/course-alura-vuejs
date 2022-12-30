import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFY } from "@/store/mutations-type"

type Notifier = {
	notify: (title: string, text: string, type: NotificationType) => void
}

export default () : Notifier => {
	const notify = (title: string, text: string, type: NotificationType): void => {
		store.commit(NOTIFY, {
			title,
			text,
			type
		})
	}

	return { 
		notify
	}
}