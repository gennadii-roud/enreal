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
			question: 'What do you cover at diplomatic events?',
			answer: 'We cover official meetings, summits, ceremonies, press moments, and institutional gatherings, focusing on key interactions and protocol-driven situations.'
		},
		{
			question: 'Do you understand diplomatic protocol?',
			answer: 'Yes, we are experienced in formal environments and always follow protocol rules, hierarchy, and access restrictions without interruption.'
		},
		{
			question: 'How discreet is your coverage?',
			answer: 'Our work is intentionally unobtrusive. We stay in the background and document events without affecting the flow or attention of participants.'
		},
		{
			question: 'Can you work in high-security or restricted environments?',
			answer: 'Yes, we have experience working in embassies, ministries, and controlled environments where discretion and compliance are essential.'
		},
		{
			question: 'Do you provide images for official use quickly?',
			answer: 'Yes, we can deliver selected images quickly for official communications, press releases, and institutional reporting.'
		},
		{
			question: 'Do you cover multi-day diplomatic programs?',
			answer: 'Yes, we cover multi-day conferences and summits with consistent documentation across all official sessions and engagements.'
		},
		{
			question: 'How do you handle sensitive situations?',
			answer: 'We remain neutral and observant, focusing on accurate documentation without interference or unnecessary attention.'
		},
		{
			question: 'Do you travel across Europe for diplomatic assignments?',
			answer: 'Yes, we operate across Europe depending on the assignment, including official state and institutional events.'
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
			src: '/images/service-hero-image-diplomatic-events.webp',
			alt: '',
		}}
		title="Diplomatic events <br>Coverage across <br>Europe"
		text="<p>Diplomatic meetings, official ceremonies, high-level summits, and institutional events.</p> <p>Focused on protocol, key interactions, and moments of significance — delivered with precision, discretion, and respect.</p>"
	/>
	<Cta
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i> A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<InfoSection
		image={{
			src: "/images/service-diplomatic-events-image-01.webp"
		}}
		title="Built for Diplomatic<br> Events"
		text="
			<p>We understand the sensitivity and protocol of diplomatic environments. That’s why we deliver:</p>
			<ul>
				<li>Discreet, highly professional photographers experienced in formal settings</li>
				<li>Respect for protocol, hierarchy, and restricted environments</li>
				<li>Careful, non-intrusive coverage of key moments and interactions</li>
				<li>Reliable, consistent imagery suitable for official communications and archives</li>
			</ul>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<InfoSection
		inverted
		image={{
			src: "/images/service-diplomatic-events-image-02.webp"
		}}
		title="One Service, All of Europe"
		text="
			<p>Diplomatic events require more than coverage—they require precision and trust. We focus on capturing key moments with accuracy and discretion, from official meetings and ceremonies to formal receptions and bilateral engagements.</p>
			<p>Whether your event takes place in major capitals or smaller official venues, we operate seamlessly across Europe. No unnecessary complexity, no disruptions—just dependable, high-quality photography aligned with the standards of diplomatic and institutional environments.</p>
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
		ctaText="Quiet coverage of important moments in official settings across Europe. <i>Focused on accuracy and timing.</i>"
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