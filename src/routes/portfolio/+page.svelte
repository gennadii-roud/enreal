<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Portfolio from '$lib/components/Sections/Portfolio/Portfolio.svelte';
	import logoDark from '$lib/stores/logoDark';

	import { casesData } from '$lib/data/casesData';

	logoDark.set(true);

	let canonical: string = '';
	let title: string = 'Event Photography & Videography Portfolio in Europe - EnReal';
	let description: string = 'Explore the EnReal portfolio featuring event photography, videography, and branded content for conferences, corporate events, fashion shows, and private gatherings across Europe.';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-images/shared-preview-image-portfolio.jpg';

	const schema = $derived.by(() => {
		const schemaService = {
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			'name': 'EnReal Studio',
			'url': '',
			'description': '',
			'logo': '',
			'image': '',
			'email': '<hi@enreal.studio>',
			'telephone': '+420 775 150 338',
			'address': {
				'@type': 'PostalAddress',
				'streetAddress': 'Davidovicova 1675/2',
				'addressLocality': 'Praha',
				'postalCode': '19800',
				'addressCountry': 'CZ'
			},
			'sameAs': [
				'<https://instagram.com/enreal.studio>'
			],
			'foundingDate': '',
			'founder': {
				'@type': 'Person',
				'name': 'Anton Filonenko'
			},
			'knowsAbout': [
				'Photography'
			]
		};

  	const combinedSchema = [schemaService];

	return `
      <script type="application/ld+json">${JSON.stringify(combinedSchema)}</script${''}>
    ` // hack to fix parser in editor
	});
</script>

<svelte:head>
  {@html schema}
</svelte:head>

<PageConfig 
	{canonical}
	{title}
	{description}
	{robots} 
	{imageUrl} 
/>

<PageContent>
	<Portfolio
		title="Photo + video works"
		text="We pay attention to light, emotions, and the small details that often go unnoticed. We move with the flow of the day without interrupting moments or forcing them.",
		cases={casesData}
	/>
</PageContent>