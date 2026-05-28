<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import Feedback from '$lib/components/Sections/Feedback/Feedback.svelte';
	import HeroMain from '$lib/components/Sections/HeroMain/HeroMain.svelte';
	import ImageContent from '$lib/components/Sections/ImageContent/ImageContent.svelte';
	import Logos from '$lib/components/Sections/Logos/Logos.svelte';
	import MediaGallery from '$lib/components/Sections/MediaGallery/MediaGallery.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = 'Event Photography & Videography studio in Europe - EnReal';
	let description: string = 'Premium event photography, videography, and content production for brands, conferences, and corporate events across Europe. Fast delivery, cinematic visuals, and social-ready content.';
	let robots: string[] = [];
	let imageUrl: string = '';

	let logoItems = [
		{
			image: {
				src: '/svg/logos/dhl-logo.svg',
				alt: 'dhl logo'
			}
		},
		{
			image: {
				src: '/svg/logos/avalanche-logo.svg',
				alt: 'avalanche logo'
			}
		},
		{
			image: {
				src: '/svg/logos/unicef-logo.svg',
				alt: 'unicef logo'
			}
		},
		{
			image: {
				src: '/svg/logos/redken-logo.svg',
				alt: 'redken logo'
			}
		},
		{
			image: {
				src: '/svg/logos/vernova-logo.svg',
				alt: 'vernova logo'
			}
		},
		{
			image: {
				src: '/svg/logos/hilton-logo.svg',
				alt: 'hilton logo'
			}
		},
		{
			image: {
				src: '/svg/logos/embraer-logo.svg',
				alt: 'embraer logo'
			}
		}
	];

	let mediaGalleryItems: MediaCardProps[] = [
		{
			type: 'image',
			image: { src: '/images/cases/dhl/dhl-20.webp' },
			date: '2024',
			title: 'DHL',
			location: 'Turkey, Istanbul',
			hoveredImages: [
				{ src: '/images/cases/dhl/dhl-20.webp', alt: 'Image 1' },
				{ src: '/images/cases/dhl/dhl-08.webp', alt: 'Image 2' },
				{ src: '/images/cases/dhl/dhl-15.webp', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/dhl/dhl-01.webp', alt: 'Image 1' },
				{ src: '/images/cases/dhl/dhl-02.webp', alt: 'Image 2' },
				{ src: '/images/cases/dhl/dhl-03.webp', alt: 'Image 3' },
				{ src: '/images/cases/dhl/dhl-04.webp', alt: 'Image 4' },
				{ src: '/images/cases/dhl/dhl-05.webp', alt: 'Image 5' },
				{ src: '/images/cases/dhl/dhl-06.webp', alt: 'Image 6' },
				{ src: '/images/cases/dhl/dhl-07.webp', alt: 'Image 7' },
				{ src: '/images/cases/dhl/dhl-08.webp', alt: 'Image 8' },
				{ src: '/images/cases/dhl/dhl-09.webp', alt: 'Image 9' },
				{ src: '/images/cases/dhl/dhl-10.webp', alt: 'Image 10' },
				{ src: '/images/cases/dhl/dhl-11.webp', alt: 'Image 11' },
				{ src: '/images/cases/dhl/dhl-12.webp', alt: 'Image 12' },
				{ src: '/images/cases/dhl/dhl-13.webp', alt: 'Image 13' },
				{ src: '/images/cases/dhl/dhl-14.webp', alt: 'Image 14' },
				{ src: '/images/cases/dhl/dhl-15.webp', alt: 'Image 15' },
				{ src: '/images/cases/dhl/dhl-16.webp', alt: 'Image 16' },
				{ src: '/images/cases/dhl/dhl-17.webp', alt: 'Image 17' },
				{ src: '/images/cases/dhl/dhl-18.webp', alt: 'Image 18' },
				{ src: '/images/cases/dhl/dhl-19.webp', alt: 'Image 19' },
				{ src: '/images/cases/dhl/dhl-20.webp', alt: 'Image 20' },
				{ src: '/images/cases/dhl/dhl-21.webp', alt: 'Image 21' },
				{ src: '/images/cases/dhl/dhl-22.webp', alt: 'Image 22' },
				{ src: '/images/cases/dhl/dhl-23.webp', alt: 'Image 23' },
				{ src: '/images/cases/dhl/dhl-24.webp', alt: 'Image 24' },
				{ src: '/images/cases/dhl/dhl-25.webp', alt: 'Image 25' },
				{ src: '/images/cases/dhl/dhl-26.webp', alt: 'Image 26' },
				{ src: '/images/cases/dhl/dhl-27.webp', alt: 'Image 27' },
				{ src: '/images/cases/dhl/dhl-28.webp', alt: 'Image 28' },
				{ src: '/images/cases/dhl/dhl-29.webp', alt: 'Image 29' },
				{ src: '/images/cases/dhl/dhl-30.webp', alt: 'Image 30' },
				{ src: '/images/cases/dhl/dhl-31.webp', alt: 'Image 31' },
				{ src: '/images/cases/dhl/dhl-32.webp', alt: 'Image 32' },
				{ src: '/images/cases/dhl/dhl-33.webp', alt: 'Image 33' },
				{ src: '/images/cases/dhl/dhl-34.webp', alt: 'Image 34' },
				{ src: '/images/cases/dhl/dhl-35.webp', alt: 'Image 35' },
				{ src: '/images/cases/dhl/dhl-36.webp', alt: 'Image 36' },
				{ src: '/images/cases/dhl/dhl-37.webp', alt: 'Image 37' },
				{ src: '/images/cases/dhl/dhl-38.webp', alt: 'Image 38' },
				{ src: '/images/cases/dhl/dhl-39.webp', alt: 'Image 39' },
				{ src: '/images/cases/dhl/dhl-40.webp', alt: 'Image 40' },
				{ src: '/images/cases/dhl/dhl-41.webp', alt: 'Image 41' },
				{ src: '/images/cases/dhl/dhl-42.webp', alt: 'Image 42' },
				{ src: '/images/cases/dhl/dhl-43.webp', alt: 'Image 43' },
				{ src: '/images/cases/dhl/dhl-44.webp', alt: 'Image 44' },
				{ src: '/images/cases/dhl/dhl-45.webp', alt: 'Image 45' },
				{ src: '/images/cases/dhl/dhl-46.webp', alt: 'Image 46' },
				{ src: '/images/cases/dhl/dhl-47.webp', alt: 'Image 47' },
				{ src: '/images/cases/dhl/dhl-48.webp', alt: 'Image 48' },
				{ src: '/images/cases/dhl/dhl-49.webp', alt: 'Image 49' },
				{ src: '/images/cases/dhl/dhl-50.webp', alt: 'Image 50' }
			]
		},
		{
			type: 'video',
			video: { src: '/videos/short-videos/icef.mp4' },
			videoUrl: 'https://roudstudio-1.wistia.com/medias/ksr6abv5z3?wvideo=ksr6abv5z3',
			date: '2024',
			category: 'Photography',
			title: 'Icef Digital Day Berlin',
			location: 'Berlin, Germany'
		},
		{
			type: 'image',
			image: { src: '/images/cases/avalanche/avalanche-17.webp' },
			date: '2023',
			category: 'Photography',
			title: 'AVALANCHE',
			location: 'Turkey, Istanbul',
			hoveredImages: [
				{ src: '/images/cases/avalanche/avalanche-07.webp', alt: 'Image 1' },
				{ src: '/images/cases/avalanche/avalanche-17.webp', alt: 'Image 2' },
				{ src: '/images/cases/avalanche/avalanche-16.webp', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/avalanche/avalanche-01.webp', alt: 'Image 1' },
				{ src: '/images/cases/avalanche/avalanche-02.webp', alt: 'Image 2' },
				{ src: '/images/cases/avalanche/avalanche-03.webp', alt: 'Image 3' },
				{ src: '/images/cases/avalanche/avalanche-04.webp', alt: 'Image 4' },
				{ src: '/images/cases/avalanche/avalanche-05.webp', alt: 'Image 5' },
				{ src: '/images/cases/avalanche/avalanche-06.webp', alt: 'Image 6' },
				{ src: '/images/cases/avalanche/avalanche-07.webp', alt: 'Image 7' },
				{ src: '/images/cases/avalanche/avalanche-08.webp', alt: 'Image 8' },
				{ src: '/images/cases/avalanche/avalanche-09.webp', alt: 'Image 9' },
				{ src: '/images/cases/avalanche/avalanche-10.webp', alt: 'Image 10' },
				{ src: '/images/cases/avalanche/avalanche-11.webp', alt: 'Image 11' },
				{ src: '/images/cases/avalanche/avalanche-12.webp', alt: 'Image 12' },
				{ src: '/images/cases/avalanche/avalanche-13.webp', alt: 'Image 13' },
				{ src: '/images/cases/avalanche/avalanche-14.webp', alt: 'Image 14' },
				{ src: '/images/cases/avalanche/avalanche-15.webp', alt: 'Image 15' },
				{ src: '/images/cases/avalanche/avalanche-16.webp', alt: 'Image 16' },
				{ src: '/images/cases/avalanche/avalanche-17.webp', alt: 'Image 17' },
				{ src: '/images/cases/avalanche/avalanche-18.webp', alt: 'Image 18' },
				{ src: '/images/cases/avalanche/avalanche-19.webp', alt: 'Image 19' },
				{ src: '/images/cases/avalanche/avalanche-20.webp', alt: 'Image 20' },
				{ src: '/images/cases/avalanche/avalanche-21.webp', alt: 'Image 21' },
				{ src: '/images/cases/avalanche/avalanche-22.webp', alt: 'Image 22' },
				{ src: '/images/cases/avalanche/avalanche-23.webp', alt: 'Image 23' },
				{ src: '/images/cases/avalanche/avalanche-24.webp', alt: 'Image 24' },
				{ src: '/images/cases/avalanche/avalanche-25.webp', alt: 'Image 25' },
				{ src: '/images/cases/avalanche/avalanche-26.webp', alt: 'Image 26' },
				{ src: '/images/cases/avalanche/avalanche-27.webp', alt: 'Image 27' },
				{ src: '/images/cases/avalanche/avalanche-28.webp', alt: 'Image 28' },
				{ src: '/images/cases/avalanche/avalanche-29.webp', alt: 'Image 29' },
				{ src: '/images/cases/avalanche/avalanche-30.webp', alt: 'Image 30' },
				{ src: '/images/cases/avalanche/avalanche-31.webp', alt: 'Image 31' },
				{ src: '/images/cases/avalanche/avalanche-32.webp', alt: 'Image 32' },
				{ src: '/images/cases/avalanche/avalanche-33.webp', alt: 'Image 33' },
				{ src: '/images/cases/avalanche/avalanche-34.webp', alt: 'Image 34' },
				{ src: '/images/cases/avalanche/avalanche-35.webp', alt: 'Image 35' },
				{ src: '/images/cases/avalanche/avalanche-36.webp', alt: 'Image 36' },
				{ src: '/images/cases/avalanche/avalanche-37.webp', alt: 'Image 37' },
				{ src: '/images/cases/avalanche/avalanche-38.webp', alt: 'Image 38' },
				{ src: '/images/cases/avalanche/avalanche-39.webp', alt: 'Image 39' },
				{ src: '/images/cases/avalanche/avalanche-40.webp', alt: 'Image 40' },
				{ src: '/images/cases/avalanche/avalanche-41.webp', alt: 'Image 41' },
				{ src: '/images/cases/avalanche/avalanche-42.webp', alt: 'Image 42' },
				{ src: '/images/cases/avalanche/avalanche-43.webp', alt: 'Image 43' },
				{ src: '/images/cases/avalanche/avalanche-44.webp', alt: 'Image 44' },
				{ src: '/images/cases/avalanche/avalanche-45.webp', alt: 'Image 45' },
				{ src: '/images/cases/avalanche/avalanche-46.webp', alt: 'Image 46' },
				{ src: '/images/cases/avalanche/avalanche-47.webp', alt: 'Image 47' },
				{ src: '/images/cases/avalanche/avalanche-48.webp', alt: 'Image 48' },
				{ src: '/images/cases/avalanche/avalanche-49.webp', alt: 'Image 49' },
				{ src: '/images/cases/avalanche/avalanche-50.webp', alt: 'Image 50' }
			]
		}
	];

let imageContentItems = [
	{
		image: {
			src: '/images/service-conference-image-01.webp',
			alt: 'image content 1'
		},
		title: 'Conferences',
		text: '<p>Our team covers conferences, summits, exhibitions, brand launches, and large-scale events across Europe. We focus on atmosphere, people, and the key moments of the event.</p>'
	},
	{
		image: {
			src: '/images/image-content-02.webp',
			alt: 'image content 2'
		},
		title: 'Brand events',
		text: '<p>We photograph product launches, internal meetings, and executive gatherings in a natural and clean way. The final images work across PR, websites, and social media.</p>'
	},
	{
		image: {
			src: '/images/image-content-03.webp',
			alt: 'image content 3'
		},
		title: 'Diplomatic events',
		text: '<p>Our team works in embassies, ministries, and international organisations with a discreet approach and full respect for security requirements and protocols.</p>'
	},
	{
		image: {
			src: '/images/image-content-04.webp',
			alt: 'image content 4'
		},
		title: 'Fashion shows',
		text: '<p>We cover fashion weeks, exhibitions, performances, and cultural events with an editorial style focused on movement, light, and storytelling.</p>'
	}
];

	let faqItems = [
		{
			question: 'Do you work across Europe?',
			answer: 'Yes, we cover events across Europe - from major cities like Berlin, Barcelona, Paris and to smaller international venues depending on the package.'
		},
		{
			question: 'What types of events do you cover?',
			answer: 'We cover conferences, brand events, diplomatic events, and fashion shows - documenting each with a focus on real moments and their context.'
		},
		{
			question: 'Do you stage or direct the content?',
			answer: 'No. We focus on real situations as they unfold. We don’t just cover events or chase key moments - we document the full context as it actually happens.'
		},
		{
			question: 'Can we book photo and video together?',
			answer: 'Yes, photo and video can be booked together. This ensures consistent visual style and smoother coordination during the event.'
		},
		{
			question: 'How do you approach shooting during events?',
			answer: 'We stay unobtrusive and work in the background. The goal is to capture atmosphere, interactions, and key moments without interrupting the flow of the event.'
		},
		{
			question: 'Do you travel for events?',
			answer: 'Yes, we regularly travel across Europe for assignments.'
		},
		{
			question: 'How fast do we receive the content?',
			answer: 'A full edited selection is delivered within a few days after the event. Express previews are available within 12 hours on request.'
		},
		{
			question: 'Can you adapt to different event formats?',
			answer: 'Yes, each event is different. We adapt coverage based on format, scale, and schedule to make sure nothing important is missed.'
		}
	];

	let testimonials = [
		{
			quote: 'Thank you for the photos! We barely noticed you working, yet the result exceeded expectations. The atmosphere of the conference was captured perfectly.',
			author: 'Anna, Conference Organizer'
		},
		{
			quote: 'The team was present all evening but never intrusive. The shots from our brand event feel natural and alive. Exactly what we needed for PR.',
			author: 'Maria, Marketing Manager'
		},
		{
			quote: 'Our conference had many moving parts, but you managed to capture it all. Speakers, audience, and atmosphere - every detail feels authentic. We’ll definitely work together again.',
			author: 'David, Event Coordinator'
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
	<HeroMain
		video={{
			src: "/videos/main-video.mov"
		}}
		title="We’re an event <br> photography and videography <br> studio in Europe"
		text="We cover photography and videography for events across Europe. We work with what’s already there: light, space, people - capturing key moments and details as they happen. Just clear and consistent documentation of the event."
	/>
	<Logos
		text="Clients we’ve worked with"
		items={logoItems}
	/>
	<Cta
		text="We create photo and video for conferences, brand events, diplomatic meetings, and fashion shows. <i>Clear documentation without unnecessary effects - key moments, atmosphere, and the people who matter.</i>"
	/>
	<MediaGallery
		title="FILMS + PHOTO"
		items={mediaGalleryItems}
	/>
	<Feedback
		card={{
		type:"image",
		image: { src: '/images/cases/woah/woah-03.webp' },
		date:"2025",
		title:"WOAH",
		location:"Switzerland, Geneva",
		hoveredImages: [
			{ src: '/images/cases/woah/woah-03.webp', alt: 'Image 1' },
			{ src: '/images/cases/woah/woah-12.webp', alt: 'Image 2' },
			{ src: '/images/cases/woah/woah-18.webp', alt: 'Image 3' },
		],
		popupImages: [
			{ src: '/images/cases/woah/woah-01.webp', alt: 'Image 1' },
			{ src: '/images/cases/woah/woah-02.webp', alt: 'Image 2' },
			{ src: '/images/cases/woah/woah-03.webp', alt: 'Image 3' },
			{ src: '/images/cases/woah/woah-04.webp', alt: 'Image 4' },
			{ src: '/images/cases/woah/woah-05.webp', alt: 'Image 5' },
			{ src: '/images/cases/woah/woah-06.webp', alt: 'Image 6' },
			{ src: '/images/cases/woah/woah-07.webp', alt: 'Image 7' },
			{ src: '/images/cases/woah/woah-08.webp', alt: 'Image 8' },
			{ src: '/images/cases/woah/woah-09.webp', alt: 'Image 9' },
			{ src: '/images/cases/woah/woah-10.webp', alt: 'Image 10' },
			{ src: '/images/cases/woah/woah-11.webp', alt: 'Image 11' },
			{ src: '/images/cases/woah/woah-12.webp', alt: 'Image 12' },
			{ src: '/images/cases/woah/woah-13.webp', alt: 'Image 13' },
			{ src: '/images/cases/woah/woah-14.webp', alt: 'Image 14' },
			{ src: '/images/cases/woah/woah-15.webp', alt: 'Image 15' },
			{ src: '/images/cases/woah/woah-16.webp', alt: 'Image 16' },
			{ src: '/images/cases/woah/woah-17.webp', alt: 'Image 17' },
			{ src: '/images/cases/woah/woah-18.webp', alt: 'Image 18' },
			{ src: '/images/cases/woah/woah-19.webp', alt: 'Image 19' },
			{ src: '/images/cases/woah/woah-20.webp', alt: 'Image 20' },
			{ src: '/images/cases/woah/woah-21.webp', alt: 'Image 21' },
			{ src: '/images/cases/woah/woah-22.webp', alt: 'Image 22' },
			{ src: '/images/cases/woah/woah-23.webp', alt: 'Image 23' },
			{ src: '/images/cases/woah/woah-24.webp', alt: 'Image 24' },
			{ src: '/images/cases/woah/woah-25.webp', alt: 'Image 25' },
			{ src: '/images/cases/woah/woah-26.webp', alt: 'Image 26' },
			{ src: '/images/cases/woah/woah-27.webp', alt: 'Image 27' },
			{ src: '/images/cases/woah/woah-28.webp', alt: 'Image 28' },
			{ src: '/images/cases/woah/woah-29.webp', alt: 'Image 29' },
			{ src: '/images/cases/woah/woah-30.webp', alt: 'Image 30' },
			{ src: '/images/cases/woah/woah-31.webp', alt: 'Image 31' },
			{ src: '/images/cases/woah/woah-32.webp', alt: 'Image 32' },
			{ src: '/images/cases/woah/woah-33.webp', alt: 'Image 33' },
			{ src: '/images/cases/woah/woah-34.webp', alt: 'Image 34' },
			{ src: '/images/cases/woah/woah-35.webp', alt: 'Image 35' },
			{ src: '/images/cases/woah/woah-36.webp', alt: 'Image 36' },
			{ src: '/images/cases/woah/woah-37.webp', alt: 'Image 37' },
			{ src: '/images/cases/woah/woah-38.webp', alt: 'Image 38' },
			{ src: '/images/cases/woah/woah-39.webp', alt: 'Image 39' },
			{ src: '/images/cases/woah/woah-40.webp', alt: 'Image 40' },
			{ src: '/images/cases/woah/woah-41.webp', alt: 'Image 41' },
			{ src: '/images/cases/woah/woah-42.webp', alt: 'Image 42' },
			{ src: '/images/cases/woah/woah-43.webp', alt: 'Image 43' },
			{ src: '/images/cases/woah/woah-44.webp', alt: 'Image 44' },
			{ src: '/images/cases/woah/woah-45.webp', alt: 'Image 45' },
			{ src: '/images/cases/woah/woah-46.webp', alt: 'Image 46' },
			{ src: '/images/cases/woah/woah-47.webp', alt: 'Image 47' },
			{ src: '/images/cases/woah/woah-48.webp', alt: 'Image 48' },
			{ src: '/images/cases/woah/woah-49.webp', alt: 'Image 49' },
			{ src: '/images/cases/woah/woah-50.webp', alt: 'Image 50' }
		]
	}}
		{testimonials}
	/>
	<Cta
		text="We work with different types of events at every scale - from intimate gatherings to large productions - anywhere across Europe."
	/>
	<ImageContent
		items={imageContentItems}
	/>
	<Packages
		videoUrl="/videos/blur.mp4"
		titleLeft={true}
		title="Packages"
		text="Our pricing stays consistent - regardless of venue, background, or location."
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


