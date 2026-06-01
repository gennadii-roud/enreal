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
	let title: string = 'Brand Event Photography & Videography in Europe - EnReal’';
	let description: string = 'Professional brand event photography and videography for launches, corporate gatherings, PR events, and branded experiences across Europe. Natural visuals, fast delivery, and social-ready content';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-preview-image-services-brand-events.jpg';

	let faqItems = [
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
			src: '/images/service-hero-image-brand-events.webp',
			alt: '',
		}}
		title="Brand event photography & videography across Europe"
		text="<p>Coverage of brand activations, product launches, and marketing events through photography and videography.</p> <p>Focused on key moments, audience interaction, and brand presence - delivered with consistency and a clean visual style.</p>"
	/>
	<Cta
		text="Capture brand events through photography and videography. Consistent coverage that reflects the tone and identity of your brand"
	/>
	<InfoSection
		image={{
			src: "/images/service-brand-events-image-01.webp"
		}}
		title="Brand event photography"
		text="
			<p>We understand the fast-moving nature of brand events and activations. That’s why we focus on photography that delivers speed, clarity, and consistency.</p>
			<ul>
				<li>Fast turnaround times for social media, campaigns, and PR</li>
				<li>Discreet, professional photographers who integrate seamlessly into your brand environment</li>
				<li>Consistent, brand-aligned visuals across multi-day activations and multiple locations</li>
				<li>Flexible coverage - from intimate influencer gatherings to large-scale experiential events</li>
			</ul>
			<p>Photography built to support active campaigns and fast decision-making.</p>
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
		title="Brand event videography"
		text="
			<p>Your brand event requires more than documentation. It requires complete photo and video coverage.</p>
			<p>We focus on capturing product launches, activations, and live audience interactions as they happen. From structured brand moments to real engagement on the ground, our videography provides a reliable visual record for marketing, social media, and campaign use.</p>
			<p>Whether your activation takes place in Berlin, Paris, Amsterdam, or a smaller city off the radar, we’ve got it covered. We operate seamlessly across all EU countries. No additional travel costs. No hidden fees. No logistical friction.</p>
			<p>Consistent, high-quality video coverage wherever your brand appears.</p>
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