<script setup lang="ts">
import type { ShoesItem } from '~/types';

defineProps<{
	item: ShoesItem;
}>();
</script>

<template>
	<a class="flex flex-row gap-8" :href="item.href" target="_blank">
		<div class="w-32 h-32 shrink-0 overflow-hidden grid items-center">
			<img :src="item.img" :alt="item.name" class="object-cover object-center w-32 h-32" />
		</div>
		<div class="w-full flex flex-col justify-between">
			<b class="text-sm">{{ item.name }}</b>
			<h1 class="text-2xl text-green-800 border-t border-t-green-800 pt-2">{{ item.price }}</h1>
		</div>
	</a>
</template>
