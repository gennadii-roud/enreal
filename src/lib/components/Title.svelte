<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';
		size?: 'xs' | 'md' | 'l' | 'xl';
		children?: Snippet;
	}

	let {
		children,
		tag = 'h2',
		size = 'md',
		className = '',
	}: Props = $props();
</script>

<svelte:element
	this={tag || 'h2'}
	class={`title ${className} title--${size}`}
>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.title {
		font-family: 'Libertinus Serif', serif;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 0.79;
		text-transform: uppercase;

    @include media(tablet-up) {
      font-size: 5rem;
    }

    @include media(laptop-up) {
      font-size: 6.2rem;
    }
	}
</style>
