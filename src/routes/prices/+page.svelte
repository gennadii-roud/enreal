<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';
	
	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Event Photography & Videography Pricing in Europe - EnReal';
	let description: string = 'Explore EnReal pricing for event photography, videography, and content production across Europe. Flexible coverage for conferences, corporate events, fashion shows, and brand experiences.';
	let robots: string[] = [];
	let imageUrl: string = '';

	let faqItems = [
		{
			question: 'What is included in your pricing?',
			answer: 'Each package includes event coverage, professional editing, and delivery of final materials depending on the selected photo, video, or combined option.'
		},
		{
			question: 'Are travel costs included?',
			answer: 'Yes, all packages include travel across Europe, including flights and accommodation when required.'
		},
		{
			question: 'Do prices change depending on the country?',
			answer: 'No, pricing stays consistent regardless of location within Europe.'
		},
		{
			question: 'Can we customize a package?',
			answer: 'Yes, custom packages are available based on your event structure, schedule, and specific deliverables.'
		},
		{
			question: 'How does delivery timing work?',
			answer: 'Edited photos are typically delivered within a few days, with express options available for selected images within 12 hours.'
		},
		{
			question: 'Do you offer multi-day event pricing?',
			answer: 'Yes, multi-day coverage is available and can be arranged as part of standard or custom packages.'
		},
		{
			question: 'Can we add extra services?',
			answer: 'Yes, add-ons such as drone footage, extended coverage, or express delivery can be included depending on the package.'
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
	<Packages 
		videoUrl="/videos/blur.mp4"
		titleLeft={true}
		title="Prices"
		titleTag="h1"
		text="Our pricing stays consistent regardless of the event size, venue, or location."
		note="Custom packages available on request"
		cards={packagesData}
		ctaText="Create unforgettable moments. <i>Preserve the feeling, the atmosphere, and the energy of the day - not just the timeline.</i>"
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


