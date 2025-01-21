<script setup lang="ts">
import type { ShoesItem } from '~/types';
import ResultItem from '../atoms/ResultItem.vue';

defineProps<{
	collection: ShoesItem[];
	collectionName: string;
}>();
</script>

<template>
	<div class="flex flex-col xl:shadow-2xl">
		<div class="xl:grid hidden place-items-center bg-white h-24">
			<NuxtImg :src="`/${collectionName}.png`" fit="none" class="h-1/2" />
		</div>
		<div class="xl:h-full xl:overflow-y-scroll flex flex-col gap-8 bg-white p-2">
			<div class="w-full h-24 xl:hidden grid place-items-center">
				<NuxtImg :src="`/${collectionName}.png`" fit="contain" class="h-1/2" />
			</div>
			<ResultItem v-for="item of collection" :item="item" />
		</div>
	</div>
</template>
