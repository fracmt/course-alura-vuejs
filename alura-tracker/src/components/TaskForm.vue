<template>
	<div class="box form-task">
		<div class="columns">
			<div class="column is-5" role="form" aria-label="Form to create new tasks">
				<input type="text" class="input" placeholder="What task will you start?" v-model="taskDescription">
			</div>
			<div class="column is-3">
				<div class="select">
					<select v-model="taskIdProject">
						<option value="">Select the project</option>
						<option :value="project.id" v-for="project in projects" :key="project.id">
							{{ project.name }}
						</option>
					</select>
				</div>
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
import { computed, defineComponent } from 'vue';
import TaskTimer from './TaskTimer.vue'
import { useStore } from 'vuex';

import { key } from '@/store'

export default defineComponent({
	name: 'TaskForm',
	emits: ['toSaveTask'],
	components: {
		TaskTimer
	},
	data() {
		return {
			taskDescription: '',
			taskIdProject: ''
		}
	},
	methods: {
		stopTask(elapsedTime: number): void {
			this.$emit('toSaveTask', {
				elapsedTime: elapsedTime,
				description: this.taskDescription,
				project: this.projects.find(item => item.id == this.taskIdProject)
			})
			this.taskDescription = '';
		}
	},
	setup() {
		const store = useStore(key)
		return {
			projects: computed(() => store.state.projects)
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