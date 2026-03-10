<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props extends LinkData {
		children?: Snippet;
		color?: string;
		className?: string;
		tabindex?: number | undefined;
		onclick?: ((e: MouseEvent) => void) | (() => void);
	}

	let {
		url,
		label,
		children,
		color = 'black',
		className,
		targetBlank = false,
		tabindex,
		onclick,
	}: Props = $props();

	let attributes = $derived.by(() => {
		let attributes: any = {};
		if (url) {
			attributes.href = url;
		}
		if (url && targetBlank) {
			attributes.target = '_blank';
			attributes.rel = 'nofollow noopener';
		}
		if (tabindex !== undefined) {
			attributes.tabindex = tabindex;
		}
		return attributes;
	});

	const tag = $derived(attributes?.href ? 'a' : 'button')
</script>

<svelte:element
	this={tag || 'button'}
	{...attributes}
	onclick={onclick}
	class={`button button--${color} ${className || ''}`}
>	

	<span>
		{#if children}
			{@render children?.()}
		{:else}
			{@html label}
		{/if}
	</span>
</svelte:element>

<style lang="scss">
	.button {
		align-items: center;
		appearance: none;
		border: 1px solid currentColor;
		border-radius: 0.5rem;
		box-shadow: none;
		cursor: pointer;
		display: inline-flex;
		font: 500 1.6rem / 1 'Google Sans Flex', sans-serif;
		justify-content: center;
		min-height: 4.2rem;
		text-align: center;
		text-decoration: none;
		transition: all 0.2s ease-out, background-color 0.2s, color 0.2s;
		padding: 1.1rem 1.3rem;
		position: relative;
		text-transform: uppercase;
		outline: none;
		max-width: 100%;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			background-color: currentColor;
			opacity: 0.15;
			pointer-events: none;
			visibility: hidden;
		}

		span {
			position: relative;
			z-index: 1;
		}

		&:not(:disabled),
		&:not(.disabled) {
			&:hover,
			&:focus {
				&::before {
					visibility: visible;
				}
			}
		}

		&--black {
			background-color: var(--black);
			color: var(--white);

			&:not(:disabled),
			&:not(.disabled) {
				&:hover,
				&:focus {
					
				}
			}
		}

		&--white {
      background-color: var(--white);
			color: var(--black);

			&:not(:disabled),
			&:not(.disabled) {
				&:hover,
				&:focus {
					
				}
			}
		}

		&--transparent {
			background-color: transparent;
			color: var(--black);

			&:not(:disabled),
			&:not(.disabled) {
				&:hover,
				&:focus {
					
				}
			}
		}
	}
</style>
