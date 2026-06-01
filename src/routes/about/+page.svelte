<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import GridContent from '$lib/components/Sections/GridContent/GridContent.svelte';
	import Team from '$lib/components/Sections/Team/Team.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(true);

	let canonical: string = '';
	let title: string = 'About EnReal | Event Photography & Videography Studio in Europe';
	let description: string = 'Learn more about EnReal, a photography and videography studio working across Europe and internationally. We create visual content for conferences, corporate events, fashion shows, diplomatic gatherings, and brand experiences.';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-images/shared-preview-image-about.jpg';

	let teamItems = [
		{
			image: {
				src: '/images/team-image-01.webp',
				alt: 'team member 1'
			},
			name: 'Anthon',
			position: '(the photography creative)',
			text: '"I began my career working within the Ministry of Digitalization and Creative Industries, where I gained experience working in structured and high-pressure environments. Later, I moved across Europe and started working on conferences, fashion shows, corporate events, and international productions. My approach is shaped by calm observation, attention to detail, and the ability to adapt naturally to different event settings."'
		},
		{
			image: {
				src: '/images/team-image-02.webp',
				alt: 'team member 2'
			},
			name: 'Dina',
			position: '(the photography creative)',
			text: '"My background is rooted in fashion, commercial, and wedding photography. Over the years, I’ve worked as the lead photographer for fashion brands while also documenting weddings and private celebrations across Europe. Working in weddings taught me how to notice emotion, movement, and the small in-between moments that make people feel connected to an event. I bring that same natural and human approach into brand and corporate work today."'
		},
		{
			image: {
				src: '/images/team-image-03.webp',
				alt: 'team member 2'
			},
			name: 'Ihor',
			position: '(the photography creative)',
			text: '"I’ve been working with video for more than 10 years. Over the years, I’ve worked behind the scenes of live shows, events, and productions in many different environments. That experience taught me how to adapt quickly, work calmly under pressure, and focus on the details that make a film feel natural and alive."'
		}
	];

	let gridContentItems: GridContentItem[] = [
		{
			type: 'image',
			image: { src: '/images/grid-content-image-01.webp' }
		},
		{
			type: 'image',
			image: { src: '/images/grid-content-image-02.webp' }
		},
		{
			type: 'image',
			image: { src: '/images/grid-content-image-03.webp' }
		},
		{
			type: 'image',
			wide: true,
			image: { src: '/images/grid-content-image-04.webp' }
		},
		// {
		// 	type: 'video',
		// 	wide: true,
		// 	video: { src: '/videos/video-example.mp4' }
		// },
		{
			type: 'textual',
			title: 'EnReal was created to simplify that process',
			text: '<p>EnReal started after years of working at events across Europe and feeling like the process had become unnecessarily complicated. Too many people involved, too much pressure, too little communication — and somehow the most important part, the atmosphere of the event itself, often got lost along the way.We wanted to build something simpler. A small and reliable team that creates honest visual coverage without making the production feel heavy.'
		},
		{
			type: 'image',
			image: { src: '/images/grid-content-image-05.webp' }
		},
		{
			type: 'image',
			image: { src: '/images/grid-content-image-06.webp' }
		},
		{
			type: 'textual',
			title: 'Who we are',
			text: '<p>EnReal was founded by Dina Deykun and Anton Filonenko together with a videography partner. After years of working across international events, conferences, and productions throughout Europe, we kept noticing the same problems. Too many layers. Unclear communication. So we created EnReal - a small team of two photographers and a videographer.</p>'
		},
		{
			type: 'image',
			wide: true,
			image: { src: '/images/grid-content-image-07.webp' }
		},
		{
			type: 'image',
			wide: true,
			image: { src: '/images/grid-content-image-08.webp' }
		},
		{
			type: 'image',
			image: { src: '/images/grid-content-image-09.webp' }
		},
		{
			type: 'image',
			wide: true,
			image: { src: '/images/grid-content-image-10.webp' }
		}
	];

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
    `; // hack to fix parser in editor
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
	<GridContent
		twoTextualItems
		title="About"
		items={gridContentItems}
	/>
	<Team
		title="Our team"
		items={teamItems}
	/>
</PageContent>