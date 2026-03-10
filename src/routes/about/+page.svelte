<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import GridContent from '$lib/components/Sections/GridContent/GridContent.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(true);

	let canonical: string = '';
	let title: string = '';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';

	let gridContentItems: GridContentItem[] = [
		{
			type: "image",
			image: { src: '/images/grid-content-image-01.jpg' }
		},
		{
			type: "image",
			image: { src: '/images/grid-content-image-02.jpg' },
		},
		{
			type: "image",
			image: { src: '/images/grid-content-image-03.jpg' }
		},
		{
			type: "video",
			wide: true,
			video: { src: '/videos/video-example.mp4' }
		},
		{
			type: "textual",
			title: "Story <i>01</i>",
			name: "Dina <i>(the photography creative)</i>",
			text: "<p>This way of working keeps us close to the craft and to the people in front of the camera. It allows space for imperfection, for atmosphere, for what can’t be planned.</p><p>What we create is not meant to impress in the moment, but to hold meaning over time.</p>"
		},
		{
			type: "image",
			image: { src: '/images/grid-content-image-05.jpg' }
		},
		{
			type: "image",
			image: { src: '/images/grid-content-image-06.jpg' }
		},
		{
			type: "textual",
			title: "Story <i>02</i>",
			name: "Gene <i>(the filming creative)</i>",
			text: "<p>This way of working keeps us close to the craft and to the people in front of the camera. It allows space for imperfection, for atmosphere, for what can’t be planned.</p><p>What we create is not meant to impress in the moment, but to hold meaning over time.</p>"
		},
		{
			type: "image",
			wide: true,
			image: { src: '/images/grid-content-image-07.jpg' }
		},
		{
			type: "image",
			wide: true,
			image: { src: '/images/grid-content-image-08.jpg' }
		},
		{
			type: "textual",
			title: "Story <i>03</i>",
			name: "Etats -",
			text: `
				<p>We make wedding photography and film for people who care about presence over performance. We work with attention, not interruption.</p>
				<p>We work with restraint. Fewer frames. More awareness. Light, timing, and presence matter more than volume.</p>
				<p>This way of working keeps us close to the craft and to the people in front of the camera. It allows space for imperfection, for atmosphere, for what can’t be planned.</p>
				<p>What we create is not meant to impress at the moment, but to hold meaning over time.</p>`
		},
		{
			type: "image",
			image: { src: '/images/grid-content-image-09.jpg' }
		},
		{
			type: "image",
			wide: true,
			image: { src: '/images/grid-content-image-10.jpg' }
		},
	]

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
	title="About - Etats Studio | Wedding Photography & Video in Europe"
	description="Meet the duo behind Etats Studio. A wedding photography and video team in Europe, focused on cinematic storytelling and editorial portraits with a timeless feel." 
	{robots} 
	{imageUrl} 
/>

<PageContent>
	<GridContent
		title="about"
		items={gridContentItems}
	/>
</PageContent>