<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar is-playground />

		<!-- ====================================================== Main Container -->
		<v-main class="main-container pb-10">
			<v-responsive>
				<v-container class="px-10">
					<v-row>
						<v-col class="v-col-12 text-center">
							<h1>Vuetify Drilldown Table</h1>
						</v-col>
						<v-col class="v-col-12 text-center">
							<v-chip color="primary">
								Playground v{{ store.pluginVersion }}
							</v-chip>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="v-col-12">
							<PlaygroundPage />
						</v-col>
					</v-row>
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>


<script setup>
import { provide } from 'vue';
import { useCoreStore } from '@/stores/index';
import PlaygroundPage from '@/playground/PlaygroundPage.vue';
import AppBar from '@/documentation/layout/AppBar.vue';

const store = useCoreStore();
const classes = reactive({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});

provide('classes', classes);
provide('links', store.links);
</script>


<style scoped>
</style>
