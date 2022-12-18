
<template>
	<section>
		<strong>{{ formatElapsedTime }}</strong>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ChronometerTimer',
	props: {
		elapsedTime: {
			type: Number,
			default: 0
		}
	},
	computed: {
		formatElapsedTime(): string {
			return new Date(this.elapsedTime * 1000).toISOString().substr(11, 8)
		}
	}
})
</script>