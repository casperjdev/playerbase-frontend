<script setup lang="ts">
import type { ShoesData } from '~/types';
import ResultSection from './ResultSection.vue';

defineProps<{
	data: ShoesData;
}>();
</script>

<template>
	<div
		class="xl:h-px grow xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:grid-flow-col gap-x-8 flex flex-col overflow-y-scroll overflow-x-auto max-xl:m-8 xl:p-8 max-xl:shadow-2xl">
		<ResultSection
			v-for="(_, key) in data"
			:collection="data![key]!"
			:collection-name="key.toString()" />
	</div>
</template>
