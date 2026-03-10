<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import GridContent from '$lib/components/Sections/GridContent/GridContent.svelte';
	import HeroSimple from '$lib/components/Sections/HeroSimple/HeroSimple.svelte';
	import ImageContent from '$lib/components/Sections/ImageContent/ImageContent.svelte';
	import Logos from '$lib/components/Sections/Logos/Logos.svelte';
	import Team from '$lib/components/Sections/Team/Team.svelte';

	import logoDark from '$lib/stores/logoDark';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = '';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';

	let logoItems = [
		{
			image: {
				src: '/svg/logos/dhl-logo.svg',
				alt: 'dhl logo',
			}
		},
		{
			image: {
				src: '/svg/logos/avalanche-logo.svg',
				alt: 'avalanche logo',
			}
		},
		{
			image: {
				src: '/svg/logos/unicef-logo.svg',
				alt: 'unicef logo',
			}
		},
		{
			image: {
				src: '/svg/logos/redken-logo.svg',
				alt: 'redken logo',
			}
		},
		{
			image: {
				src: '/svg/logos/vernova-logo.svg',
				alt: 'vernova logo',
			}
		},
		{
			image: {
				src: '/svg/logos/hilton-logo.svg',
				alt: 'hilton logo',
			}
		},
		{
			image: {
				src: '/svg/logos/embraer-logo.svg',
				alt: 'embraer logo',
			}
		},
	];

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

	let imageContentItems = [
		{
			image: {
				src: '/images/image-content-01.jpg',
				alt: 'image content 1',
			},
			title: "Conferences",
			text: "<p>Professional coverage of conferences, summits, exhibitions, brand launches, and large-scale events.</p><p>Focused on atmosphere, key moments, and the people who matter — delivered with consistency and discretion.</p>"
		},
		{
			image: {
				src: '/images/image-content-02.jpg',
				alt: 'image content 2',
			},
			title: "Brand events",
			text: "<p>Photography for company events, product launches, internal meetings, and executive gatherings.</p><p>Images that align with brand identity and work across PR, websites, social media, and internal communications.</p>"
		},
		{
			image: {
				src: '/images/image-content-03.jpg',
				alt: 'image content 3',
			},
			title: "Diplomatic events",
			text: "<p>Experience working in formal, protocol-driven environments including embassies, ministries, and international organisations.</p><p>Discreet presence, respect for security requirements, and precise visual documentation.</p>"
		},
		{
			image: {
				src: '/images/image-content-04.jpg',
				alt: 'image content 4',
			},
			title: "Fashion shows",
			text: "<p>Coverage of fashion weeks, cultural programmes, exhibitions, and performances.</p><p>Editorial approach with attention to light, movement, and narrative — suitable for publications and brand storytelling.</p>"
		},
	]
</script>

<PageConfig 
	{canonical} 
	title=""
	description="" 
	{robots} 
	{imageUrl} 
/>

<PageContent>
	<HeroSimple 
		image={{
			src: '/images/hero-simple-image.jpg',
			alt: '',
		}}
		title="Switzerland corporat event photography and videography"
		text="Delivering top-quality corporate event photo and video services in Switzerland for a multi-day company meeting. We're always delighted to collaborate with clients who appreciate the importance of exceptional event photography and videography."
	/>
	<Logos 
		text="Clients we’ve worked with"
		items={logoItems}
	/>
	<GridContent 
		twoTextualItems
		title="About"
		items={gridContentItems}
	/>
	<Team 
		title="Our team"
		items={teamItems}
	/>
	<ImageContent 
		items={imageContentItems}
	/>
</PageContent>