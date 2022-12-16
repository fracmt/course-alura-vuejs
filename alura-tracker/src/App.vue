<template>
  <main class="columns is-gapless is-multilin">
    <div class="column is-one-quarter">
      <side-bar />
    </div>
    <div class="column is-three-quarter">
      <task-form />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import TaskForm from './components/TaskForm.vue';

export default defineComponent({
    name: "App",
    components: { SideBar, TaskForm }
});
</script>

<style>

</style>
