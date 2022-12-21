import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import TaskView from '../views/TaskView.vue'

const routes: RouteRecordRaw[] = [{
	path: '/',
	name: 'Tasks',
	component: TaskView
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;