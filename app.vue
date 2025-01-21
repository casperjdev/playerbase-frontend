<template>
	<Head>
		<Link rel="preconnect" href="https://fonts.googleapis.com" />
		<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<Link
			href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
			rel="stylesheet" />
	</Head>

	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
