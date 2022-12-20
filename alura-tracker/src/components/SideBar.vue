<template>
	<header>
		<h1>
			<img src="../assets/logo.png" alt="logo">
		</h1>
		<button class="button" @click="changeTheme">
			{{ btnThemeText }}
		</button>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SideBar',
	emits: ['toChangeTheme'],
	data() {
		return {
			darkModeActive: false
		}
	},
	computed: {
		btnThemeText() {
			return this.darkModeActive ? 'Unset dark mode' : 'Set dark mode';
		}
	},
	methods: {
		changeTheme() {
			this.darkModeActive = !this.darkModeActive
			this.$emit('toChangeTheme', this.darkModeActive)
		}
	}
})
</script>

<style scoped>
header {
	padding: 1rem;
	background: #0d3b66;
	width: 100%;
	height: 100vh;
	text-align: center;
}

@media only screen and (max-width: 768px) {
	header {
		padding: 2.5rem;
		height: auto;
	}
}
</style>