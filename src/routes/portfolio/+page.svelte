<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Portfolio from '$lib/components/Sections/Portfolio/Portfolio.svelte';
	import logoDark from '$lib/stores/logoDark';
	import { casesData } from '$lib/data/casesData';

	logoDark.set(true);

	let canonical: string = '';
	let title: string = '';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';

	const schema = $derived.by(() => {
  	const schemaService = {
  	  "@context": "https://schema.org",
  	  "@type": "ProfessionalService",
  	  "name": "Etats Studio",
  	  "url": "",
  	  "description": "",
  	  "logo": "",
  	  "image": "",
  	  "email": "<bj@etats.studio>",
			"telephone": "+48 784 772 397",
  	  "address": {
  	    "@type": "PostalAddress",
  	    "streetAddress": "Franciszka Klimczaka 10G",
  	    "addressLocality": "Warsaw",
  	    "postalCode": "02-972",
  	    "addressCountry": "PL"
  	  },
  	  "sameAs": [
  	    "<https://instagram.com/etats.studio>"
  	  ],
  	  "foundingDate": "",
  	  "founder": {
  	    "@type": "Person",
  	    "name": "Oleksandr Krasovskyi"
  	  },
  	  "knowsAbout": [
  	    "Photography",
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
	title="Portfolio — Etats Studio | Wedding Photography & Video in Europe"
	description="View the wedding photography and video portfolio of Etats Studio. Cinematic scenes and editorial portraits capturing modern European weddings with depth and emotion." 
	{robots} 
	{imageUrl} 
/>


<PageContent>
	<Portfolio
		title="photo + video works"
		text="Your event unfolds, and we are there to witness. We anticipate light. We notice subtleties. We move with the story, never ahead of it. We don’t repeat moments; we let them be.",
		cases={casesData}
	/>
</PageContent>