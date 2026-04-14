<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Enreal | Service 1';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';
</script>

<PageConfig
	{canonical}
	{title}
	{description}
	{robots}
	{imageUrl}
/>

<PageContent>
	Service 1
</PageContent>