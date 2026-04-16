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
			question: "Do you work only in France?",
			answer: "No, we cover events across Europe — including Germany, Switzerland, the Netherlands, and beyond.",
		},
		{
			question: "Do you photograph and film together?",
			answer: "Yes, we offer combined photo and video coverage to ensure a consistent visual style, better coordination on-site, and a more complete storytelling approach across your event. This allows both teams to work seamlessly together without missing key moments. You can find pricing and package details in the Packages section.",
		},
		{
			question: "How would you describe your approach on the event day?",
			answer: "We take a discreet, documentary-style approach focused on capturing real interactions, atmosphere, and key moments as they naturally unfold. Our presence is unobtrusive, allowing guests and speakers to stay fully engaged while we document the event. When needed, we also provide gentle direction to ensure important moments and portraits are covered. Pricing and package details are available in the Packages section.",
		},
		{
			question: "How many hours of coverage do we need?",
			answer: "It depends on the type and duration of your event. Smaller events may require only a few hours of coverage, while full-day or multi-day events need extended coverage to ensure all key moments are captured properly. You can find available coverage options in the Packages section.",
		},
		{
			question: "Do you offer multi-day coverage?",
			answer: "Yes, we offer multi-day coverage as part of our Custom package. It is designed for events that require flexible scheduling and tailored coverage based on your needs and event structure.",
		},
		{
			question: "Do you use drones?",
			answer: "Yes, we can provide drone coverage when it is suitable for the location, event type, and local regulations. It is often used to capture scale, venue context, and atmospheric establishing shots.",
		},
		{
			question: "How long does it take to receive our photos and films?",
			answer: "You will receive a selection of 150+ professionally edited photos with delivery within three days after the event. This includes key moments such as speakers, branding, and overall event atmosphere. Express delivery of 20–30 photos within 12 hours is also available as an add-on.",
		},
		{
			question: "What does the Custom package include?",
			answer: "The Custom package is designed for events that require a tailored approach beyond standard coverage. It allows flexible scheduling, multi-day assignments, specific deliverables, and adapted workflows based on your event structure, goals, and creative requirements.",
		}
	]

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
			src: '/images/hero-simple-image-01.webp',
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
			src: "/images/hero-simple-image.webp"
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
			src: "/images/hero-simple-image.webp"
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
		titleLeft={false}
		title="prices"
		text="No matter the venue, your name, or where you come from - our pricing stays the same for everyone."
		note="custom packages available on request"
		cards={packagesData}
		ctaLabel="Ready for your"
		ctaSup="Wedding"
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