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
			question: 'What do you cover during fashion events?',
			answer: 'We cover runway shows, backstage moments, designer presentations, fittings, front-row guests, and afterparties, focusing on both energy and detail.'
		},
		{
			question: 'Do you work during fashion week schedules?',
			answer: 'Yes, we are experienced with fast-paced fashion week environments and adapt to tight schedules, multiple shows, and quick turnarounds.'
		},
		{
			question: 'Can you shoot backstage as well as runway?',
			answer: 'Yes, we cover both backstage preparation and runway shows to capture the full story behind the collection.'
		},
		{
			question: 'How do you handle fast-moving runway conditions?',
			answer: 'We work with precision and anticipation, focusing on timing, light, and movement to capture key looks without disruption.'
		},
		{
			question: 'Do you provide fast delivery for press and media?',
			answer: 'Yes, we can deliver selected images quickly for press, social media, and brand communication during or shortly after the show.'
		},
		{
			question: 'Do you align with brand or designer aesthetics?',
			answer: 'Yes, we adapt our visual approach to match the designer’s vision and brand identity while maintaining an editorial standard.'
		},
		{
			question: 'Do you travel across Europe for fashion events?',
			answer: 'Yes, we cover fashion events across Europe including Paris, Milan, Berlin, Amsterdam, and emerging fashion locations.'
		},
		{
			question: 'What makes your approach different for fashion events?',
			answer: 'We focus on atmosphere and narrative — capturing not just the runway, but the full experience of the collection and its environment.'
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
			src: '/images/service-hero-image-fashion-shows.webp',
			alt: '',
		}}
		title="European <br>Fashion <br>Events"
		text="<p>Professional photography of fashion shows, backstage moments, designer presentations, and fashion week events across Europe — including Germany, Switzerland, the Netherlands, and beyond.</p><p>Capturing style, movement, and atmosphere with precision and artistry, delivering refined visual coverage from Europe’s key fashion destinations.</p>"
	/>
	<Cta
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i> A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<InfoSection
		image={{
			src: "/images/service-fashion-shows-image-01.webp"
		}}
		title="Built for Modern<br> Fashion Teams"
		text="
			<p>We understand the fast pace and high standards of fashion shows. That’s why we deliver:</p>
			<ul>
				<li>Fast turnaround times for media, press, and social platforms</li>
				<li>Discreet, professional photographers experienced in runway and backstage environments</li>
				<li>Consistent, editorial-quality imagery aligned with your brand and collection</li>
				<li>Flexible coverage—from backstage preparations to runway highlights and afterparties</li>
			</ul>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<InfoSection
		inverted
		image={{
			src: "/images/service-fashion-shows-image-02.webp"
		}}
		title="One Service, All of Europe"
		text="
			<p>Fashion show deserves more than documentation—it deserves a strong visual identity. We capture the essence of your collection, the atmosphere of the runway, and the details that define your brand. From front-row moments to backstage energy, our photography becomes a powerful asset for lookbooks, press, and campaigns.</p>
			<p>Whether your show takes place in Paris, Milan, Berlin, or an emerging fashion destination—we’ve got you covered. We operate seamlessly across all EU countries with no additional travel costs. No hidden fees, no logistical complexity—just consistent, high-quality imagery wherever your show happens.</p>
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
		ctaText="We follow the flow of fashion events. <i>Movement, details, and atmosphere without interruption - captured as it happens.</i></i>"
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