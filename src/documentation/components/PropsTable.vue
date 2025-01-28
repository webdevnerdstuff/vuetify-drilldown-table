<template>
	<v-row :id="sectionId">
		<v-col cols="12">
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					:href="`#${sectionId}`"
				>#</a>
				{{ sectionTitle }}
			</h3>
			<div
				v-if="subtitle"
				v-html="subtitle"
			></div>

			<div>Props with the <v-icon
					color="primary"
					icon="mdi:mdi-earth"
					size="x-small"
				/> icon next to it can be used as a global property in <code class="inline-code">createVDrilldownTable</code>.
			</div>
		</v-col>
	</v-row>

	<v-row>
		<v-col cols="12">
			<v-card>
				<v-card-title>
					<v-text-field
						v-model="search"
						append-icon="mdi:mdi-magnify"
						hide-details
						label="Search"
						single-line
						variant="underlined"
					></v-text-field>
				</v-card-title>

				<v-data-table
					:headers="headers"
					hide-default-footer
					:items="items"
					:items-per-page="-1"
					:search="search"
					:sort-by="[{ key: 'name', order: 'asc' }]"
				>
					<template #[`item.name`]="{ item }">
						<td>
							<span
								:id="`props-${sectionId ? `${sectionId}-${item.name}` : item.name}`"
								class="name-item text-mono ml-n2"
							>
								<span class="text-primary">#</span>
								<a
									class="text-primary"
									:class="classes.appLink"
									:href="`#props-${sectionId ? `${sectionId}-${item.name}` : item.name}`"
								>{{ item.name }} <v-icon
										v-if="item.global"
										class=""
										color="primary"
										icon="mdi:mdi-earth"
										size="x-small"
									/></a>
							</span>
						</td>
					</template>

					<template #[`item.type`]="{ item }">
						<td
							class="text-success  py-1"
							v-html="item.type"
						></td>
					</template>

					<template #[`item.default`]="{ item }">
						<td
							class="text-accent py-1"
							v-html="item.default"
						></td>
					</template>

					<template #[`item.desc`]="{ item }">
						<td
							class="py-1"
							v-html="item.desc"
						></td>
					</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const classes = inject<Docs.GlobalClasses>('classes')!;

export interface Item {
	name: string;
	type: string;
	default: string;
	desc: string;
	global?: boolean;
}

interface Props {
	headers: any;
	items?: Item[];
	sectionId?: string;
	sectionTitle?: string;
	subtitle?: string;
}

defineProps<Props>();

const search = ref<string>('');
</script>

<style lang="scss" scoped></style>
