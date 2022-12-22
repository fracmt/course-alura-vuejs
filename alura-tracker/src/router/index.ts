import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import TaskView from '../views/TaskView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Tasks',
		component: TaskView
	},
	{
		path: '/projects',
		name: 'Projects',
		component: ProjectView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;