<template>
	<task-form @toSaveTask="saveTask" />
	<div class="taskList">
		<task-item v-for="(taskItem, index) in tasks" :key="index" :task="taskItem" />
		<task-box v-if="isEmptyTaskList">
			The task list is empty.
		</task-box>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';
import ITask from '../interfaces/ITask';
import TaskBox from '../components/TaskBox.vue';

export default defineComponent({
	name: "TaskView",
	components: { TaskForm, TaskItem, TaskBox },
	data() {
		return {
			tasks: [] as ITask[]
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
		}
	}
});
</script>

<style>
.taskList {
	padding: 1.25rem;
}
</style>
