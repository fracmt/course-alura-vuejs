<template>
	<ChronometerTimer :elapsedTime="elapsedTime"></ChronometerTimer>
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
import ChronometerTimer from './ChronometerTimer.vue';

export default defineComponent({
    name: "TaskTimer",
    emits: [
        "timerStoped"
    ],
    data() {
        return {
            elapsedTime: 0,
            chronometer: 0,
            chronometerRunning: false
        };
    },
    methods: {
        start() {
            console.log("start");
            this.chronometerRunning = true;
            this.chronometer = setInterval(() => {
                this.elapsedTime++;
            }, 1000);
        },
        stop() {
            console.log("stop");
            this.chronometerRunning = false;
            clearInterval(this.chronometer);
            this.$emit("timerStoped", this.elapsedTime);
            this.elapsedTime = 0;
        }
    },
    components: { ChronometerTimer }
})
</script>