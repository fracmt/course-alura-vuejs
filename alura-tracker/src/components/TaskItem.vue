<template>
	<task-box>
		<div class="columns">
			<div class="column is-7">
				{{task.description || 'Without description'}}
			</div>
			<div class="column">
				<chronometer-timer :elapsedTime="task.elapsedTime" />
			</div>
		</div>
	</task-box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ChronometerTimer from "./ChronometerTimer.vue";
import ITask from "@/interfaces/ITask";
import TaskBox from "./TaskBox.vue";

export default defineComponent({
	name: 'TaskItem',
	components: { ChronometerTimer, TaskBox },
	props: {
		task: {
			type: Object as PropType<ITask>,
			required: true
		}
	}
})
</script>