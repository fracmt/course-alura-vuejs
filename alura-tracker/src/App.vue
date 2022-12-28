<template>
	<main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
		<div class="column is-one-quarter">
			<side-bar @toChangeTheme="changeTheme" />
		</div>
		<div class="column is-three-quarter content">
			<notification-message />
			<router-view></router-view>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import NotificationMessage from './components/NotificationMessage.vue';


export default defineComponent({
	name: "App",
	components: { SideBar, NotificationMessage },
	data() {
		return {
			darkModeActive: false
		}
	},
	methods: {
		changeTheme(darkMode: boolean) {
			this.darkModeActive = darkMode
		}
	}
});
</script>

<style>
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
