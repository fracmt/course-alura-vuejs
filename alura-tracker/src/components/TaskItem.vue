<template>
	<div class="box has-text-weight-bold">
		<div class="column is-7">
			{{task.description}}
		</div>
		<div class="column">
			<ChronometerTimer :elapsedTime="task.elapsedTime" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ChronometerTimer from "./ChronometerTimer.vue";
import ITask from "@/interfaces/ITask";

export default defineComponent({
	name: 'TaskItem',
	components: { ChronometerTimer },
	props: {
		task: {
			type: Object as PropType<ITask>,
			required: true
		}
	}
})
</script>

<style scoped>
.box {
	background: #FAF0CA;
}
</style>