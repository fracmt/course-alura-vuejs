<template>
	<section>
		<router-link to="/project/new" class="button">
			<span class="icon is-small">
				<i class="fas fa-plus"></i>
			</span>
			<span>New project</span>
		</router-link>
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="project in projects" :key="project.id">
					<td>{{ project.id }}</td>
					<td>{{ project.name }}</td>
					<td>
						<router-link :to="`/project/${project.id}`" class="button">
							<span class="icon is-small">
								<i class="fas fa-pencil-alt"></i>
							</span>
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
	name: "ProjectList",
	setup() {
		const store = useStore()
		return {
			projects: computed(() => store.state.projects)
		}
	}
});
</script>