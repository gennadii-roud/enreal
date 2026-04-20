<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';
	
	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Enreal | Pricing';
	let description: string = 'Pricing — Enreal Studio | Event Photography & Video in Europe';
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
			question: 'What is the difference between Photo, Video, and Photo + Video?',
			answer: 'Photo covers still imagery, Video includes highlights and recap films, and Photo + Video combines both for full event coverage and consistency.'
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
	<Packages 
		videoUrl="/videos/video-example.mp4"
		titleLeft={true}
		title="Prices"
		text="No matter the venue, your name, or where you come from - our pricing stays the same for everyone."
		note="Custom packages available on request"
		cards={packagesData}
		ctaText="Create something people will talk about. <i>Keep the feeling. Preserve the day. So you remember the day</i> - not just the schedule."
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


