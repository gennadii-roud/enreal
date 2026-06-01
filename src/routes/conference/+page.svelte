<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import InfoSection from '$lib/components/Sections/InfoSection/InfoSection.svelte';
	import HeroSimple from '$lib/components/Sections/HeroSimple/HeroSimple.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';
	import Cta from '$lib/components/Cta.svelte';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Conference Photography & Videography in Europe - EnReal';
	let description: string = 'Professional conference photography and videography for summits, corporate conferences, exhibitions, and international events across Europe. Fast delivery, natural coverage, and social-ready content.';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-images/shared-preview-image-services-conferences.jpg';

	let faqItems = [
		{
			question: 'What do you focus on at conferences?',
			answer: 'We focus on key moments that define the event - speakers, audience reactions, discussions, and the overall atmosphere - capturing how the conference unfolds.'
		},
		{
			question: 'Do you only shoot large conferences?',
			answer: 'No, we work with all scales - from small executive summits to large international expos. The approach stays the same regardless of size.'
		},
		{
			question: 'How do you work during live sessions?',
			answer: 'We work quietly in the background to avoid disrupting speakers or attendees. The goal is to stay present without being noticeable.'
		},
		{
			question: 'How fast do we receive the content?',
			answer: 'A full edited selection is delivered within a few days after the event. Express previews are available within 12 hours on request.'
		},
		{
			question: 'Can you work across multi-day conferences?',
			answer: 'Yes, we regularly cover multi-day events and adjust coverage to ensure continuity across all sessions and activities.'
		},
		{
			question: 'What is included in the final delivery?',
			answer: 'All packages include professionally selected and edited photos and/or videos depending on the chosen format, delivered in high quality and ready for use in marketing, PR, and social media.'
		},
		{
			question: 'Can the coverage be adapted to the event schedule?',
			answer: 'Yes, we adapt to the conference or event program to ensure we don’t miss key sessions, speakers, and important moments throughout the schedule'
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

		const schemaPackages = {
			'@context': 'https://schema.org',
			'@type': 'OfferCatalog',
			'name': 'Photography Packages',
			'itemListElement': packagesData.flatMap(item =>
				item.coverage.map((coverageItem, index) => ({
					'@type': 'Offer',
					'name': `${item.description} – ${coverageItem.number}h`,
					'description': item.note
						? `${item.description}. ${item.note}`
						: item.description,
					'price': Number(coverageItem.price.replace(/,/g, '')),
					'priceCurrency': 'EUR',
					'availability': 'https://schema.org/InStock',
					'category': 'Photography Service',
					'itemOffered': {
						'@type': 'Service',
						'name': item.description,
						'provider': {
							'@type': 'ProfessionalService',
							'name': 'Enreal Studio'
						}
					},
					'addOn': item.additionalFeatures?.map(feature => ({
						'@type': 'Offer',
						'name': feature.name,
						'price': Array.isArray(feature.price)
							? feature.price[index]
							: feature.price,
						'priceCurrency': 'EUR'
					}))
				}))
			)
		};

		const schemaFaq = {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			'mainEntity': faqItems.map(item => ({
				'@type': 'Question',
				'name': item.question,
				'acceptedAnswer': {
					'@type': 'Answer',
					'text': item.answer || ''
				}
			}))
		};

		const combinedSchema = [schemaService, schemaPackages, schemaFaq];

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
	<HeroSimple
		small
		image={{
			src: '/images/service-hero-image-conference.webp',
			alt: '',
		}}
		title="Conference<br> photography & videography in Europe"
		text="<p>Professional photo and video coverage of conferences across Europe.</p><p>We document how conferences actually unfold.</p><p>Speakers. Audience. Space. The rhythm of the day.</p>"
	/>
	<Cta
		text="Create a clear visual record of your conference through photography and videography. <i>Focused on key moments, speakers, interactions, and the overall atmosphere as it unfolds naturally</i>"
	/>
	<InfoSection
		image={{
			src: "/images/service-conference-image-01.webp"
		}}
		title="Conference<br> photography"
		text="
			<p>We understand the fast pace of conferences. That’s why we focus on photography that delivers clarity, speed, and consistency.</p>
			<ul>
				<li>Fast turnaround times</li>
				<li>Discreet, professional photographers who blend into your event</li>
				<li>Consistent, brand-aligned imagery across multi-day or multi-location events</li>
				<li>Flexible coverage from intimate executive summits to large-scale expos</li>
			</ul>
			<p>Photography that works in real time and after the event. Built for teams who move fast.</p>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<InfoSection
		inverted
		image={{
			src: "/images/service-conference-image-02.webp"
		}}
		title="Conference<br> videography"
		text="
			<p>We provide structured video coverage of conferences across Europe. That’s why we focus on videography that delivers clarity, consistency, and control.</p>
			<p>We capture keynote presentations, audience interaction, and the natural flow of the event in a clear, structured format. From live moments to full event coverage, our videography provides a complete visual record for marketing, PR, and internal use.</p>
			<p>Consistent, reliable video coverage wherever your event takes place.</p>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<Packages
		videoUrl="/videos/blur.mp4"
		titleLeft={true}
		title="Prices"
		text="No matter the venue, your name, or where you come from - our pricing stays the same for everyone."
		note="Custom packages available on request"
		cards={packagesData}
		ctaText="We document conferences across Europe with a focus on clarity and natural rhythm. <i>Keynotes, participant conversations, and real moments - all captured without interference.</i>"
		ctaButton={{
			url: "#",
			label: "check availability",
			color: "white"
		}}
	/>
	<Faq
		title="Your questions answered"
		items={faqItems}
	/>
</PageContent>