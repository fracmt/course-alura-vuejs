<template>
	<div class="box form-task">
		<div class="columns">
			<div class="column is-8" role="form" aria-label="Form to create new tasks">
				<input type="text" class="input" placeholder="What task will you start?" v-model="taskDescription">
			</div>
			<div class="column">
				<div class="is-flex is-align-items-center is-justify-content-space-between">
					<task-timer @timer-stoped="stopTask" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskTimer from './TaskTimer.vue'

export default defineComponent({
	name: 'TaskForm',
	emits: ['toSaveTask'],
	components: {
		TaskTimer
	},
	data() {
		return {
			taskDescription: ''
		}
	},
	methods: {
		stopTask(elapsedTime: number): void {
			this.$emit('toSaveTask', {
				elapsedTime: elapsedTime, 
				description: this.taskDescription
			})
			this.taskDescription = '';
		}
	}
})
</script>

<style>
.form-task {
	color: var(--text-primary);
	background-color: var(--bg-primary);
}
</style>