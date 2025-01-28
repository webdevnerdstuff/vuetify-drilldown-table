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
						:key="(color as string)"
						:active="headerBackgroundColor === color"
						:color="headerBackgroundColor === color ? color : 'accent'"
						size="small"
						:value="color"
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


<script setup lang="ts">
import { provide, ref } from 'vue';
// import GroupByClientTable from './GroupByClientTable.vue';
import ClientTable from './ClientTable.vue';
import ServerTable from './ServerTable.vue';
import tableDefaults from './tableDefaults';

const clientDefaults = JSON.parse(JSON.stringify(tableDefaults));
const serverDefaults = { ...JSON.parse(JSON.stringify(tableDefaults)), ...{ searchDebounce: 750, server: true } };

const tableSettings = ref(JSON.parse(JSON.stringify(clientDefaults)));
const tableSettingsServer = reactive({ ...JSON.parse(JSON.stringify(serverDefaults)), ...{ searchDebounce: 750, server: true } });


// -------------------------------------------------- Testing Helpers //
const colors = ref(['primary', 'secondary', 'success', 'info', 'warning', 'error', null]);
const densities = ref(['compact', 'comfortable', 'default']);
const density = ref('compact');
const headerBackgroundColor = ref('primary');
const selectedColor = ref('primary');

const defaultColors = computed(() => {
	return {
		background: selectedColor.value ?? defaultColorsExample.value.background,
		border: selectedColor.value ?? defaultColorsExample.value.border,
		color: selectedColor.value ? `on-${selectedColor.value}` : defaultColorsExample.value.color,
	};
});

const defaultColorsExample = ref({
	background: 'accent',
	border: 'accent',
	color: 'on-accent',
});

provide('defaultColors', defaultColors);
provide('selectedColor', selectedColor);
provide('density', density);


watch(() => selectedColor.value, (val) => {
	updateColor(val);
});

function updateColor(val) {
	headerBackgroundColor.value = val ?? defaultColorsExample.value.background;
}
</script>


<style lang="scss"></style>
