<script lang="ts">
	import { slide } from 'svelte/transition';

	interface Props {
		items: {
			label: string;
			url: string
		}[];
	}

	let { items }: Props = $props();
</script>

<div class="dropdown" transition:slide={{ duration: 300 }}>
	{#if items?.length}
		<div class="dropdown__items">
			{#each items as item}
				<a href={item.url} class="dropdown__item">
					{item.label}
				</a>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
  .dropdown {
		background-color: var(--grey-light);
		border-radius: .5rem;
    left: 0;
		padding: 2.5rem;
		position: absolute;
		right: 0;
		top: calc(100% + 1.5rem);

    &__items {
			display: grid;
			gap: .5rem;
    }

    &__item {
      font-size: 2rem;
      font-weight: 500;
			padding: .5rem 0;
      transition: opacity .2s;

      &:hover {
        opacity: .8;
      }
    }
  }
</style>

