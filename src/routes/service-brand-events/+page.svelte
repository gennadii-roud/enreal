<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import InfoSection from '$lib/components/Sections/InfoSection/InfoSection.svelte';
	import HeroSimple from '$lib/components/Sections/HeroSimple/HeroSimple.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Enreal | Service 1';
	let description: string = '';
	let robots: string[] = [];
	let imageUrl: string = '';

	let faqItems = [
		{
			question: 'Why is documenting brand events important?',
			answer: 'Because it turns a one-time experience into lasting visual content - showing how the brand is experienced in real situations, and creating high-quality material that supports marketing and corporate communication.'
		},
		{
			question: 'What do you cover at brand events?',
			answer: 'At brand events, we focus on engaging, shareable moments that turn attendees into active participants - capturing how people experience and interact with the brand in real time.'
		},
		{
			question: 'Can the content be used for ads and social media?',
			answer: 'Yes, all materials are suitable for social media, advertising campaigns, and internal communication.'
		},
		{
			question: 'How do you approach brand events on site?',
			answer: 'We observe real interactions between people and the brand and capture authentic reactions without staging.'
		},
		{
			question: 'How fast do we receive the content?',
			answer: 'A full edited selection is delivered within a few days after the event. Express previews are available within 12 hours on request.'
		},
		{
			question: 'What do you focus on at brand events?',
			answer: 'We focus on the key moments that define the brand experience - presentations, audience reactions, and interactions - capturing how people engage with the brand in real time.'
		},
		{
			question: 'Do you work across Europe?',
			answer: 'Yes, we cover events across Europe - from major cities like Berlin, Barcelona, Paris and to smaller international venues depending on the package.'
		},
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
			src: '/images/service-hero-image-brand-events.webp',
			alt: '',
		}}
		title="European <br>Brand <br>Experiences"
		text="<p>Coverage of brand activations, product launches and marketing events.</p><p>Focused on storytelling, audience engagement, and capturing the essence of your brand — delivered with consistency and a refined visual identity.</p>"
	/>
	<Cta
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i> A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<InfoSection
		image={{
			src: "/images/service-brand-events-image-01.webp"
		}}
		title="Made for Innovative Brand Teams"
		text="
			<p>We understand the fast-moving nature of brand events and activations. That’s why we deliver:</p>
			<ul>
				<li>Fast turnaround times for social media, campaigns, and PR</li>
				<li>Discreet, professional photographers who integrate seamlessly into your brand environment</li>
				<li>Consistent, brand-aligned visuals across multi-day activations and multiple locations</li>
				<li>Flexible coverage—from intimate influencer gatherings to large-scale experiential events</li>
			</ul>
		"
		button={{
			label: "Check availability",
		}}
	/>
	<InfoSection
		inverted
		image={{
			src: "/images/service-brand-events-image-02.webp"
		}}
		title="One Service, All of Europe"
		text="
			<p>Your brand event deserves more than documentation—it deserves impact. We focus on capturing emotion, interaction, and the moments that bring your brand to life. From product reveals to real audience engagement, our photography becomes a powerful visual asset for your marketing, social media, and future campaigns.</p>
			<p>Whether your activation is in Berlin, Paris, Amsterdam, or a smaller city off the radar—we’ve got you covered. We operate seamlessly across all EU countries with no additional travel costs. No hidden fees, no logistical friction—just consistent, high-quality coverage wherever your brand shows up.</p>
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
		ctaText="We document what happens during real events. <i>No staging, just real moments as they unfold on site.</i>"
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