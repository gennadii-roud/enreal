<script lang="ts">
	import Masonry from 'svelte-bricks';
	import Image from './Image.svelte';
	import { v4 as uuidv4 } from 'uuid';

	interface Props {
		items?: ImageAttributes[];
	}

	let { items = [] }: Props = $props();

	let itemsWithIds = $derived(
		items.map((item) => ({
			...item,
			id: uuidv4()
		}))
	);

	let gap = 5;
	let height = $state(0);
	let width = $state(0);
	let minColWidth = $derived((width - gap) / 2);
	let maxColWidth = $derived((width - gap) / 2);
</script>

<Masonry
	items={itemsWithIds}
	{minColWidth}
	{maxColWidth}
	{gap}
	bind:masonryWidth={width}
	bind:masonryHeight={height}
>
	{#snippet children({ item })}
		<Image
			className="full-image"
			data={item}
			alt={item.alt}
		/>
	{/snippet}
</Masonry>