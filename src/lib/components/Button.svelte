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
    border-radius: .5rem;
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    font: 500 1.6rem / 1 'Google Sans Flex', sans-serif;
    justify-content: center;
    min-height: 4.2rem;
    max-width: 100%;
    outline: none;
    overflow: hidden;
    padding: 1.1rem 1.3rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .2s ease-out, background-color .2s, color .2s;

		&::before {
			content: '';
      background-color: currentColor;
      height: 100%;
      inset: 0;
      opacity: .15;
      pointer-events: none;
      position: absolute;
      visibility: hidden;
      width: 100%;
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
