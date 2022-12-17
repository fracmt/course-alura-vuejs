<template>
	<section>
		<strong>{{ formatElapsedTime }}</strong>
	</section>
	<button class="button" @click="start" :disabled="chronometerRunning">
		<span class="icon">
			<i class="fas fa-play"></i>
		</span>
		<span>play</span>
	</button>
	<button class="button" @click="stop" :disabled="!chronometerRunning">
		<span class="icon">
			<i class="fas fa-stop"></i>
		</span>
		<span>stop</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TaskTimer',
	data() {
		return {
			elapsedTime: 0,
			chronometer: 0,
			chronometerRunning: false
		}
	},
	computed: {
		formatElapsedTime(): string {
			return new Date(this.elapsedTime * 1000).toISOString().substr(11, 8)
		}
	},
	methods: {
		start() {
			console.log('start');
			this.chronometerRunning = true;
			this.chronometer = setInterval(() => {
				this.elapsedTime++;
			}, 1000)
		},
		stop() {
			console.log('stop');
			this.chronometerRunning = false;
			clearInterval(this.chronometer);
		}
	}
})
</script>