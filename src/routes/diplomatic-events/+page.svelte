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
	let title: string = 'Diplomatic Event Photography & Videography in Europe - EnReal';
	let description: string = 'Professional photography and videography for diplomatic events, embassies, ministries, and international organisations across Europe. Discreet coverage, protocol awareness, and fast delivery.';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-preview-image-services-diplomatic-events.jpg';

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
			question: 'Do you travel across Europe for diplomatic assignments?',
			answer: 'Yes, we operate across Europe depending on the assignment, including official state and institutional events.'
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
			src: '/images/service-hero-image-diplomatic-events.webp',
			alt: '',
		}}
		title="Diplomatic event photography & videography across Europe"
		text="<p>Diplomatic meetings, official ceremonies, high-level summits, and institutional events through photography and videography.</p>"
	/>
	<Cta
		text="We create photo and video coverage of diplomatic events across Europe. Capture what happened. Keep the context. Preserve the moment. So you remember the event - not just the protocol"
	/>
	<InfoSection
		image={{
			src: "/images/service-diplomatic-events-image-01.webp"
		}}
		title="Diplomatic <br>photography"
		text="
			<p>We understand the sensitivity, protocol, and structure of diplomatic environments. That’s why we focus on photography that delivers accuracy, discretion, and consistency.</p>
			<ul>
				<li>Discreet, highly professional photographers experienced in formal settings</li>
				<li>Strict respect for protocol, hierarchy, and restricted access environments</li>
				<li>Careful, non-intrusive coverage of key moments and official interactions</li>
				<li>Reliable, consistent imagery suitable for institutional use, archives, and official communications</li>
			</ul>
			<p>Photography that documents without disruption, and preserves the integrity of the event.</p>
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
		title="Diplomatic <br>videography"
		text="
			<p>Diplomatic events require more than recording. They require precise video coverage with full respect for protocol and context.</p>
			<p>We focus on capturing official meetings, ceremonies, receptions, and bilateral engagements as they happen. Structured coverage that reflects the formality and significance of each moment, delivered with discretion and control.</p>
			<p>Whether your event takes place in major capitals or smaller institutional venues, we operate seamlessly across Europe. No unnecessary complexity. No operational friction. No disruptions.</p>
			<p>Consistent, high-quality video coverage aligned with diplomatic and institutional standards.</p>
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
		ctaText="Quiet coverage of diplomatic events across Europe. <i>Focused on protocol, precision, and timing of key official moments as they unfold.</i>"
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