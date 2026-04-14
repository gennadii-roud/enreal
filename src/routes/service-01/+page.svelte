<script lang="ts">
	import HeroInfo from '$lib/components/Sections/HeroInfo/HeroInfo.svelte';
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(true);

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
	<HeroInfo
		title="Service 1"
		image={{
			src: "/images/featured-card-image-01.jpg"
		}}
	/>
</PageContent>