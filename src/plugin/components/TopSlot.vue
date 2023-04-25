<template>
	<slot
		v-if="$slots.top"
		name="top"
	/>

	<v-col
		v-else-if="loadedDrilldown.showSearch"
		lg="12"
	>
		<v-row>
			<slot
				v-if="$slots[`top.left`]"
				name="top.left"
			/>

			<v-col
				v-else-if="loadedDrilldown.showSearch"
				class="d-flex align-center justify-end"
				:class="searchFieldClasses"
			>
				<!-- =========================== Search -->
				<v-text-field
					v-if="loadedDrilldown.showSearch"
					v-model="levelSearch"
					class="mt-0 pt-0"
					:density="loadedDrilldown.searchProps.density"
					hide-details
					label="Search"
					single-line
					:variant="loadedDrilldown.searchProps.variant"
				></v-text-field>
			</v-col>

			<slot
				v-if="$slots[`top.right`]"
				name="top.right"
			/>
		</v-row>
	</v-col>
</template>

<script setup lang="ts">
defineProps({
	loadedDrilldown: {
		required: true,
		type: Object,
	},
	searchFieldClasses: {
		required: true,
		type: Object,
	}
});


const levelSearch = ref<string>('');
</script>
