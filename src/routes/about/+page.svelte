<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import GridContent from '$lib/components/Sections/GridContent/GridContent.svelte';
	import Team from '$lib/components/Sections/Team/Team.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Enreal | About';
	let description: string = 'Capturing moments, atmosphere, and stories';
	let robots: string[] = [];
	let imageUrl: string = '';

	let teamItems = [
		{
			image: {
				src: '/images/team-image-01.jpg',
				alt: 'team member 1',
			},
			name: 'Anthon',
			position: '(the photography creative)',
			text: 'Anton has an extensive background working within the Ministry of Culture and Creative Industries in Ukraine, alongside years of experience covering fashion shows and corporate events across Europe. His work is shaped by structured environments, high-profile productions, and an ability to operate calmly within complex event settings.'
		},
		{
			image: {
				src: '/images/team-image-02.jpg',
				alt: 'team member 2',
			},
			name: 'Dina',
			position: '(the photography creative)',
			text: 'Dina’s background is rooted in fashion and commercial photography. She has worked as the lead photographer for numerous fashion brands, developing a strong editorial eye and a refined approach to visual storytelling that translates naturally into event and brand-focused work.'
		},
		{
			image: {
				src: '/images/team-image-02.jpg',
				alt: 'team member 2',
			},
			name: 'Dina',
			position: '(the photography creative)',
			text: 'Dina’s background is rooted in fashion and commercial photography. She has worked as the lead photographer for numerous fashion brands, developing a strong editorial eye and a refined approach to visual storytelling that translates naturally into event and brand-focused work.'
		},
	];

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
			title: "EnReal was created to simplify that process.",
			text: "<p>EnReal is a global photography and professional videography studio capturing moments that matter with clarity and intention. We work with trusted creative talent and a streamlined production process to deliver high-quality photography and video across more than 30 countries.</p><p>Our focus is on simplicity — removing unnecessary layers, working efficiently, and creating visual content that feels honest, precise, and purposeful.</p>"
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
			title: "Who we are",
			text: "<p>EnReal was founded by Dina Deykun and Anton Filonenko, together with a dedicated videography partner, after years of working across international events, conferences, and productions where the same problems kept repeating.</p><p>Large events often involve many moving parts, tight schedules, and high expectations — yet visual coverage is frequently treated as an afterthought. Too many photographers, unclear direction, inconsistent quality, or complex production layers that slow everything down.</p>"
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
			type: "image",
			image: { src: '/images/grid-content-image-09.jpg' }
		},
		{
			type: "image",
			wide: true,
			image: { src: '/images/grid-content-image-10.jpg' }
		},
	]
</script>

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