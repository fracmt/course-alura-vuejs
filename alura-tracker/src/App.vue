<template>
	<main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
		<div class="column is-one-quarter">
			<side-bar @toChangeTheme="changeTheme"/>
		</div>
		<div class="column is-three-quarter content">
			<task-form @toSaveTask="saveTask" />
			<div class="taskList">
				<task-item v-for="(taskItem, index) in tasks" :key="index" :task="taskItem" />
				<task-box v-if="isEmptyTaskList">
					The task list is empty.
				</task-box>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';
import TaskItem from './components/TaskItem.vue';
import ITask from './interfaces/ITask';
import TaskBox from './components/TaskBox.vue';

export default defineComponent({
	name: "App",
	components: { SideBar, TaskForm, TaskItem, TaskBox },
	data() {
		return {
			tasks: [] as ITask[],
			darkModeActive: false
		}
	},
	computed: {
		isEmptyTaskList(): boolean {
			return this.tasks.length === 0
		}
	},
	methods: {
		saveTask(task: ITask) {
			this.tasks.push(task);
		},
		changeTheme(darkMode: boolean) {
			this.darkModeActive = darkMode
		}
	}
});
</script>

<style>
.taskList {
	padding: 1.25rem;
}
main {
	--bg-primary: #fff;
	--text-primary: #000;
}
main.dark-mode {
	--bg-primary: #2b2d42;
	--text-primary: #ddd;
}
.content {
	background-color: var(--bg-primary);
}
</style>
