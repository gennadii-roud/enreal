<script lang="ts">
	interface Props {
		canonical?: string;
		title?: string;
		description?: string;
		robots?: string[];
		imageUrl?: string;
	}

	const {
		canonical = '',
		title = '',
		description = '',
		robots = [],
		imageUrl = ''
	}: Props = $props();
</script>

<svelte:head>
	{#if title?.length}
		<title>{title}</title>
		<meta name="title" content={title} />
		<meta property="og:title" content={title} />
	{/if}

	{#if description?.length}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}

	{#if canonical?.length}
		<link rel="canonical" href={canonical} />
		<meta property="og:url" content={canonical} />
	{/if}

	{#if imageUrl?.length}
		<meta property="og:image" content={imageUrl} />
	{/if}

	<meta property="og:type" content="website" />

	{#if robots.length}
		<meta name="robots" content={robots.join(', ')} />
	{/if}
</svelte:head>