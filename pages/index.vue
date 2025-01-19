<script setup>
import { ref } from 'vue';

const query = ref('');
</script>

<template>
	<section class="space-y-8 flex flex-col">
		<h1 class="text-7xl font-bold text-center">Shoe<b class="text-green-800">Base</b></h1>
		<p class="text-2xl text-center">Buty w najlepszej cenie - nie ważne czego potrzebujesz</p>

		<input
			class="outline-none bg-green-800 bg-opacity-25 border-b-2 border-b-green-800 text-center text-4xl text-black placeholder:text-green-800 placeholder:text-opacity-25"
			type="text"
			placeholder="Czego szukasz?"
			name=""
			id=""
			v-model="query" />
	</section>
</template>
