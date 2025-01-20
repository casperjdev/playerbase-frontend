<script setup>
import ResultHeader from '../molecules/ResultHeader.vue';
import ResultColumn from '../molecules/ResultColumn.vue';

//const { data } = await useFetch('');
</script>

<template>
	<section class="w-full h-full flex flex-col gap-8">
		<ResultHeader />
		<div class="h-full grid grid-cols-3 gap-8">
			<ResultColumn />
			<ResultColumn />
			<ResultColumn />
		</div>
	</section>
</template>
