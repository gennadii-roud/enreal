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
	let title: string = 'Enreal | Service 1';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';

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
			question: 'What makes your conference photography different?',
			answer: 'We focus on storytelling, not just documentation - capturing atmosphere, people, and interactions that define the event, not only the stage moments.'
		},
		{
			question: 'What is included in the final delivery?',
			answer: 'All packages include professionally selected and edited photos and/or videos depending on the chosen format, delivered in high quality and ready for use in marketing, PR, and social media.'
		},
		{
			question: 'Can the coverage be adapted to the event schedule?',
			answer: 'Yes, we adapt to the conference or event program to ensure we don’t miss key sessions, speakers, and important moments throughout the schedule.'
		},
		{
			question: 'How much material do we receive after the event?',
			answer: 'Depending on the package, you receive from 150 to 350+ professionally selected and edited photos, as well as video formats if included in your package.'
		}
	];

	const schema = $derived.by(() => {
		const schemaService = {
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			'name': 'Enreal Studio',
			'url': '',
			'description': '',
			'logo': '',
			'image': '',
			'email': '<bj@etats.studio>',
			'telephone': '+48 784 772 397',
			'address': {
				'@type': 'PostalAddress',
				'streetAddress': 'Franciszka Klimczaka 10G',
				'addressLocality': 'Warsaw',
				'postalCode': '02-972',
				'addressCountry': 'PL'
			},
			'sameAs': [
				'<https://instagram.com/etats.studio>'
			],
			'foundingDate': '',
			'founder': {
				'@type': 'Person',
				'name': 'Oleksandr Krasovskyi'
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
		title="Conference <br>Photography in <br>Europe"
		text="<p>Professional coverage of conferences, summits, exhibitions, brand launches, and large-scale events.</p> <p>Focused on atmosphere, key moments, and the people who matter — delivered with consistency and discretion.</p>"
	/>
	<Cta
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i> A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<InfoSection
		image={{
			src: "/images/service-conference-image-01.webp"
		}}
		title="Built for Modern<br> Event Teams"
		text="
			<p>We understand the fast pace of conferences. That’s why we deliver:</p>
			<ul>
				<li>Fast turnaround times for social media and press use</li>
				<li>Discreet, professional photographers who blend into your event</li>
				<li>Consistent brand-aligned imagery across multi-day or multi-location events</li>
				<li>Flexible coverage—from intimate executive summits to large-scale expos</li>
			</ul>
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
		title="One Service, All of Europe"
		text="
			<p>Your conference deserves more than documentation—it deserves storytelling. We specialize in capturing the energy, connections, and key moments that define your event. From keynote speakers to candid networking interactions, our photography transforms your conference into a powerful visual narrative you can reuse across marketing, PR, and internal communications</p>
			<p>Whether your event is in Berlin, Paris, Amsterdam, or a smaller city off the beaten path—we’ve got you covered. We operate seamlessly across all EU countries with no additional travel costs. No hidden fees, no logistical headaches—just consistent, high-quality coverage wherever your event takes place.</p>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<Packages
		videoUrl="/videos/video-example.mp4"
		titleLeft={true}
		title="Prices"
		text="No matter the venue, your name, or where you come from - our pricing stays the same for everyone."
		note="Custom packages available on request"
		cards={packagesData}
		ctaText="We document conferences across Europe with a focus on clarity and natural rhythm.<i>Keynotes, participant conversations, and real moments - all captured without interference.</i>"
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