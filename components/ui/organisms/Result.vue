<script setup lang="ts">
import ReturnButton from '../atoms/ReturnButton.vue';
import ResultContainer from '../molecules/ResultContainer.vue';
import ResultHeader from '../molecules/ResultHeader.vue';
import type { ShoesData } from '~/types';

const route = useRoute();

const { data: items } = await useFetch<ShoesData>(`http://localhost:4000?name=${route.query.q}`);
</script>

<template>
	<section class="w-full h-full flex flex-col gap-8">
		<ResultHeader />
		<ResultContainer :data="items!" />
		<ReturnButton />
	</section>
</template>
