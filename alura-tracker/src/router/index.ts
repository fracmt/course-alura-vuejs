import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import TaskView from '../views/TaskView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectEditView from '../views/Project/ProjectEditView.vue'

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
	},
	{
		path: '/project/new',
		name: 'New project',
		component: ProjectEditView
	},
	{
		path: '/project/:id',
		name: 'Edit project',
		component: ProjectEditView,
		props: true
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;