<script lang="ts">
	import '$lib/styles/reset.scss';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/global.scss';
	import '$lib/styles/hide.scss';

	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';

	import { createUiState } from '$lib/stores/uiState.svelte';

	let { children } = $props();

	createUiState();
</script>

<svelte:head>
	<title>Enreal</title>
</svelte:head>

<div class="wrapper">
	<Header />
	<div class="main" in:fade={{ duration: 300, delay: 300, easing: cubicOut }} out:fade={{ duration: 300, easing: cubicOut }}>
		{@render children?.()}
	</div>
	<Footer />
</div>
