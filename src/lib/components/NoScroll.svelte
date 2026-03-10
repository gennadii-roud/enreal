<script lang="ts" context="module">
	import { derived, get, writable } from 'svelte/store';

	let activeComponents: number = 0;
	let disabled = writable(false);
	let scrollTop: number = 0;

	export const scrollDisabled = derived(disabled, ($disabled) => $disabled);

	const componentMounded = () => {
		activeComponents += 1;

		if (get(disabled) || activeComponents < 1 || !document.scrollingElement) return;
		disabled.set(true);

		scrollTop = document.scrollingElement.scrollTop;
		const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
		document.documentElement.style.cssText = `height: 100%; overflow: hidden; position: fixed; width: calc(100% - ${scrollbarWidth}px);`;
		document.body.style.cssText = 'height: 100%; overflow: hidden;';
		document.documentElement.classList.add('scroll-disabled');
		const root: HTMLElement | null = document.querySelector('.wrapper');
		if (root) {
			root.style.cssText = 'height: 100%; overflow: hidden;';
			root.scrollTop = scrollTop;
		}
	};

	const componentDestroyed = () => {
		activeComponents -= 1;

		if (!get(disabled) || activeComponents > 0 || !document.scrollingElement) return;
		disabled.set(false);

		document.documentElement.classList.remove('scroll-disabled');
		document.body.style.cssText = '';
		const root: HTMLElement | null = document.querySelector('.wrapper');
		root && (root.style.cssText = '');
		if (scrollTop) {
			document.documentElement.style.cssText = 'scroll-behavior: unset;';
			document.scrollingElement.scrollTop = scrollTop;
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					document.documentElement.style.cssText = '';
				});
			});
		} else {
			document.documentElement.style.cssText = '';
		}
	};
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	onMount(componentMounded);

	onDestroy(componentDestroyed);
</script>
