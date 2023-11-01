<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-btn-toggle
					v-model="selectedColor"
					class="ms-2"
					density="compact"
				>
					<v-btn
						v-for="color in colors"
						:key="color"
						:active="headerBackgroundColor === color"
						:color="headerBackgroundColor === color ? color : 'accent'"
						size="small"
						:value="color"
						@click="updateColor(color)"
					>
						{{ color ? color : 'DefaultColors Prop' }}
					</v-btn>
				</v-btn-toggle>

				<v-btn-toggle
					v-model="density"
					class="ms-2"
					density="compact"
				>
					<v-btn
						v-for="densityName in densities"
						:key="densityName"
						size="small"
						:value="densityName"
					>
						{{ densityName }}
					</v-btn>
				</v-btn-toggle>
			</v-col>
		</v-row>

		<v-row>
			<ClientTable :settings="tableSettings" />
			<ServerTable :settings="tableSettingsServer" />
			<!-- <GroupByClientTable :settings="tableSettings" /> -->
		</v-row>
	</v-container>
</template>


<script setup>
import { ref } from 'vue';
// import GroupByClientTable from './GroupByClientTable.vue';
import ClientTable from './ClientTable.vue';
import ServerTable from './ServerTable.vue';
import tableDefaults from './tableDefaults';


const tableSettings = ref(Object.assign({}, tableDefaults));
const tableSettingsServer = ref({ ...tableDefaults, ...{ searchDebounce: 750, server: true } });


// -------------------------------------------------- Testing Helpers //
const colors = ref(['primary', 'secondary', 'success', 'info', 'warning', 'error', null]);
const densities = ref(['compact', 'comfortable', 'default']);
const density = ref('compact');
const headerBackgroundColor = ref('primary');
const selectedColor = ref('primary');

const defaultColors = ref({
	background: 'primary',
	border: 'primary',
	color: 'on-primary',
});
const defaultColorsExample = ref({
	background: 'accent',
	border: 'accent',
	color: 'on-accent',
});

provide('defaultColors', defaultColors);
provide('density', density);

function updateColor(val) {
	headerBackgroundColor.value = val ?? defaultColorsExample.value.background;

	defaultColors.value = {
		background: val ?? defaultColorsExample.value.background,
		border: val ?? defaultColorsExample.value.border,
		color: val ? `on-${val}` : defaultColorsExample.value.color,
	};
}
</script>


<style lang="scss">
</style>
