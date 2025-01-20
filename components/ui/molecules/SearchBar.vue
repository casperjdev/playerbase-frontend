<script setup lang="ts">
import SearchBarInput from '../atoms/SearchBarInput.vue';
import SearchBarSubmit from '../atoms/SearchBarSubmit.vue';

const query = ref('');
</script>

<template>
	<div class="space-y-8 flex flex-col">
		<SearchBarInput v-model:model-value="query" />

		<SearchBarSubmit :query="query" />
	</div>
</template>
