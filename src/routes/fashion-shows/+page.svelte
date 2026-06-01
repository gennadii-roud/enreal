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
	let title: string = 'Fashion Show Photography & Videography in Europe - EnReal';
	let description: string = 'Professional fashion show photography and videography for fashion weeks, runway shows, presentations, and brand events across Europe. Editorial visuals, fast delivery, and social-ready content.';
	let robots: string[] = [];
	let imageUrl: string = '/images/shared-images/shared-preview-image-services-fashion-shows.jpg';

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
			question: 'Do you provide fast delivery for press and media?',
			answer: 'Yes, we can deliver selected images quickly for press, social media, and brand communication during or shortly after the show.'
		},
		{
			question: 'Do you travel across Europe for fashion events?',
			answer: 'Yes, we cover fashion events across Europe including Paris, Milan, Berlin, Amsterdam, and emerging fashion locations.'
		},
		{
			question: 'What makes your approach different for fashion events?',
			answer: 'We focus on atmosphere and narrative - capturing not just the runway, but the full experience of the collection and its environment.'
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
			src: '/images/service-hero-image-fashion-shows.webp',
			alt: '',
		}}
		title="Fashion show photography & videography across Europe"
		text="<p>Professional photo and video coverage of fashion shows, backstage moments, presentations, and fashion week events across Europe.</p>"
	/>
	<Cta
		text="Focused on capturing style, movement, and atmosphere as they happen, <i>with precise and consistent visual coverage</i>"
	/>
	<InfoSection
		image={{
			src: "/images/service-fashion-shows-image-01.webp"
		}}
		title="Fashion show photography"
		text="
			<p>We understand the fast pace and high standards of fashion shows. That’s why we focus on photography that delivers speed, precision, and editorial consistency.</p>
			<ul>
				<li>Fast turnaround times for media, press, and social platforms</li>
				<li>Discreet, professional photographers experienced in runway and backstage environments</li>
				<li>Consistent, editorial-quality imagery aligned with your brand and collection</li>
				<li>Flexible coverage from backstage preparations to runway highlights and afterparties</li>
			</ul>
			<p>Photography that supports both immediate publication and long-term brand use.</p>
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
		title="Fashion show videography"
		text="
			<p>Fashion shows require more than coverage. They require structured video documentation with a clear visual identity.</p>
			<p>We capture runway presentations, backstage preparation, front-row reactions, and the full atmosphere of your show. From motion on the runway to detail-driven backstage energy, our videography provides a complete visual record of your collection for media, campaigns, and brand communication.</p>
			<p>Whether your show takes place in Paris, Milan, Berlin, or an emerging fashion destination, we’ve got you covered. We operate seamlessly across all EU countries. No additional travel costs. No hidden fees. No logistical complexity.</p>
			<p>Consistent, high-quality video coverage wherever your show happens.</p>
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