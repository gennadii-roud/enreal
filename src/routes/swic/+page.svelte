<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import Feedback from '$lib/components/Sections/Feedback/Feedback.svelte';
	import HeroSimple from '$lib/components/Sections/HeroSimple/HeroSimple.svelte';
	import Logos from '$lib/components/Sections/Logos/Logos.svelte';
	import MediaGallery from '$lib/components/Sections/MediaGallery/MediaGallery.svelte';
	import Packages from '$lib/components/Sections/Packages/Packages.svelte';

	import logoDark from '$lib/stores/logoDark';
	import { packagesData } from '$lib/data/packagesData';

	logoDark.set(false);

	let canonical: string = '';
	let title: string = '';
	let description: string = '';
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
			image: { src: '/images/cases/dhl/dhl-20.jpg' },
			date: '2024.05.13',
			category: 'Photography',
			title: 'DHL',
			place: 'Various Locations',
			location: 'Istanbul',
			price: '',
			coverage: '',
			hoveredImages: [
				{ src: '/images/cases/dhl/dhl-20.jpg', alt: 'Image 1' },
				{ src: '/images/cases/dhl/dhl-08.jpg', alt: 'Image 2' },
				{ src: '/images/cases/dhl/dhl-15.jpg', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/dhl/dhl-01.jpg', alt: 'Image 1' },
				{ src: '/images/cases/dhl/dhl-02.jpg', alt: 'Image 2' },
				{ src: '/images/cases/dhl/dhl-03.jpg', alt: 'Image 3' },
				{ src: '/images/cases/dhl/dhl-04.jpg', alt: 'Image 4' },
				{ src: '/images/cases/dhl/dhl-05.jpg', alt: 'Image 5' },
				{ src: '/images/cases/dhl/dhl-06.jpg', alt: 'Image 6' },
				{ src: '/images/cases/dhl/dhl-07.jpg', alt: 'Image 7' },
				{ src: '/images/cases/dhl/dhl-08.jpg', alt: 'Image 8' },
				{ src: '/images/cases/dhl/dhl-09.jpg', alt: 'Image 9' },
				{ src: '/images/cases/dhl/dhl-10.jpg', alt: 'Image 10' },
				{ src: '/images/cases/dhl/dhl-11.jpg', alt: 'Image 11' },
				{ src: '/images/cases/dhl/dhl-12.jpg', alt: 'Image 12' },
				{ src: '/images/cases/dhl/dhl-13.jpg', alt: 'Image 13' },
				{ src: '/images/cases/dhl/dhl-14.jpg', alt: 'Image 14' },
				{ src: '/images/cases/dhl/dhl-15.jpg', alt: 'Image 15' },
				{ src: '/images/cases/dhl/dhl-16.jpg', alt: 'Image 16' },
				{ src: '/images/cases/dhl/dhl-17.jpg', alt: 'Image 17' },
				{ src: '/images/cases/dhl/dhl-18.jpg', alt: 'Image 18' },
				{ src: '/images/cases/dhl/dhl-19.jpg', alt: 'Image 19' },
				{ src: '/images/cases/dhl/dhl-20.jpg', alt: 'Image 20' },
				{ src: '/images/cases/dhl/dhl-21.jpg', alt: 'Image 21' },
				{ src: '/images/cases/dhl/dhl-22.jpg', alt: 'Image 22' },
				{ src: '/images/cases/dhl/dhl-23.jpg', alt: 'Image 23' },
				{ src: '/images/cases/dhl/dhl-24.jpg', alt: 'Image 24' },
				{ src: '/images/cases/dhl/dhl-25.jpg', alt: 'Image 25' },
				{ src: '/images/cases/dhl/dhl-26.jpg', alt: 'Image 26' },
				{ src: '/images/cases/dhl/dhl-27.jpg', alt: 'Image 27' },
				{ src: '/images/cases/dhl/dhl-28.jpg', alt: 'Image 28' },
				{ src: '/images/cases/dhl/dhl-29.jpg', alt: 'Image 29' },
				{ src: '/images/cases/dhl/dhl-30.jpg', alt: 'Image 30' },
				{ src: '/images/cases/dhl/dhl-31.jpg', alt: 'Image 31' },
				{ src: '/images/cases/dhl/dhl-32.jpg', alt: 'Image 32' },
				{ src: '/images/cases/dhl/dhl-33.jpg', alt: 'Image 33' },
				{ src: '/images/cases/dhl/dhl-34.jpg', alt: 'Image 34' },
				{ src: '/images/cases/dhl/dhl-35.jpg', alt: 'Image 35' },
				{ src: '/images/cases/dhl/dhl-36.jpg', alt: 'Image 36' },
				{ src: '/images/cases/dhl/dhl-37.jpg', alt: 'Image 37' },
				{ src: '/images/cases/dhl/dhl-38.jpg', alt: 'Image 38' },
				{ src: '/images/cases/dhl/dhl-39.jpg', alt: 'Image 39' },
				{ src: '/images/cases/dhl/dhl-40.jpg', alt: 'Image 40' },
				{ src: '/images/cases/dhl/dhl-41.jpg', alt: 'Image 41' },
				{ src: '/images/cases/dhl/dhl-42.jpg', alt: 'Image 42' },
				{ src: '/images/cases/dhl/dhl-43.jpg', alt: 'Image 43' },
				{ src: '/images/cases/dhl/dhl-44.jpg', alt: 'Image 44' },
				{ src: '/images/cases/dhl/dhl-45.jpg', alt: 'Image 45' },
				{ src: '/images/cases/dhl/dhl-46.jpg', alt: 'Image 46' },
				{ src: '/images/cases/dhl/dhl-47.jpg', alt: 'Image 47' },
				{ src: '/images/cases/dhl/dhl-48.jpg', alt: 'Image 48' },
				{ src: '/images/cases/dhl/dhl-49.jpg', alt: 'Image 49' },
				{ src: '/images/cases/dhl/dhl-50.jpg', alt: 'Image 50' }
			]
		},
		{
			type: 'video',
			video: { src: '/videos/video-example.mp4' },
			videoUrl: 'https://player.vimeo.com/video/1157410924',
			date: '2025',
			category: 'Video',
			title: 'A+G',
			place: 'Chateau Bla Bla',
			location: 'Bordeaux, France',
			price: '2,500 eur',
			coverage: '12th coverage'
		},
		{
			type: 'image',
			image: { src: '/images/cases/avalanche/avalanche-17.jpg' },
			date: '2023.11.14',
			category: 'Photography',
			title: 'AVALANCHE',
			place: 'Cahit Kocaömer Kültür Merkezi',
			location: 'Istanbul',
			price: '',
			coverage: '',
			hoveredImages: [
				{ src: '/images/cases/avalanche/avalanche-07.jpg', alt: 'Image 1' },
				{ src: '/images/cases/avalanche/avalanche-17.jpg', alt: 'Image 2' },
				{ src: '/images/cases/avalanche/avalanche-16.jpg', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/avalanche/avalanche-01.jpg', alt: 'Image 1' },
				{ src: '/images/cases/avalanche/avalanche-02.jpg', alt: 'Image 2' },
				{ src: '/images/cases/avalanche/avalanche-03.jpg', alt: 'Image 3' },
				{ src: '/images/cases/avalanche/avalanche-04.jpg', alt: 'Image 4' },
				{ src: '/images/cases/avalanche/avalanche-05.jpg', alt: 'Image 5' },
				{ src: '/images/cases/avalanche/avalanche-06.jpg', alt: 'Image 6' },
				{ src: '/images/cases/avalanche/avalanche-07.jpg', alt: 'Image 7' },
				{ src: '/images/cases/avalanche/avalanche-08.jpg', alt: 'Image 8' },
				{ src: '/images/cases/avalanche/avalanche-09.jpg', alt: 'Image 9' },
				{ src: '/images/cases/avalanche/avalanche-10.jpg', alt: 'Image 10' },
				{ src: '/images/cases/avalanche/avalanche-11.jpg', alt: 'Image 11' },
				{ src: '/images/cases/avalanche/avalanche-12.jpg', alt: 'Image 12' },
				{ src: '/images/cases/avalanche/avalanche-13.jpg', alt: 'Image 13' },
				{ src: '/images/cases/avalanche/avalanche-14.jpg', alt: 'Image 14' },
				{ src: '/images/cases/avalanche/avalanche-15.jpg', alt: 'Image 15' },
				{ src: '/images/cases/avalanche/avalanche-16.jpg', alt: 'Image 16' },
				{ src: '/images/cases/avalanche/avalanche-17.jpg', alt: 'Image 17' },
				{ src: '/images/cases/avalanche/avalanche-18.jpg', alt: 'Image 18' },
				{ src: '/images/cases/avalanche/avalanche-19.jpg', alt: 'Image 19' },
				{ src: '/images/cases/avalanche/avalanche-20.jpg', alt: 'Image 20' },
				{ src: '/images/cases/avalanche/avalanche-21.jpg', alt: 'Image 21' },
				{ src: '/images/cases/avalanche/avalanche-22.jpg', alt: 'Image 22' },
				{ src: '/images/cases/avalanche/avalanche-23.jpg', alt: 'Image 23' },
				{ src: '/images/cases/avalanche/avalanche-24.jpg', alt: 'Image 24' },
				{ src: '/images/cases/avalanche/avalanche-25.jpg', alt: 'Image 25' },
				{ src: '/images/cases/avalanche/avalanche-26.jpg', alt: 'Image 26' },
				{ src: '/images/cases/avalanche/avalanche-27.jpg', alt: 'Image 27' },
				{ src: '/images/cases/avalanche/avalanche-28.jpg', alt: 'Image 28' },
				{ src: '/images/cases/avalanche/avalanche-29.jpg', alt: 'Image 29' },
				{ src: '/images/cases/avalanche/avalanche-30.jpg', alt: 'Image 30' },
				{ src: '/images/cases/avalanche/avalanche-31.jpg', alt: 'Image 31' },
				{ src: '/images/cases/avalanche/avalanche-32.jpg', alt: 'Image 32' },
				{ src: '/images/cases/avalanche/avalanche-33.jpg', alt: 'Image 33' },
				{ src: '/images/cases/avalanche/avalanche-34.jpg', alt: 'Image 34' },
				{ src: '/images/cases/avalanche/avalanche-35.jpg', alt: 'Image 35' },
				{ src: '/images/cases/avalanche/avalanche-36.jpg', alt: 'Image 36' },
				{ src: '/images/cases/avalanche/avalanche-37.jpg', alt: 'Image 37' },
				{ src: '/images/cases/avalanche/avalanche-38.jpg', alt: 'Image 38' },
				{ src: '/images/cases/avalanche/avalanche-39.jpg', alt: 'Image 39' },
				{ src: '/images/cases/avalanche/avalanche-40.jpg', alt: 'Image 40' },
				{ src: '/images/cases/avalanche/avalanche-41.jpg', alt: 'Image 41' },
				{ src: '/images/cases/avalanche/avalanche-42.jpg', alt: 'Image 42' },
				{ src: '/images/cases/avalanche/avalanche-43.jpg', alt: 'Image 43' },
				{ src: '/images/cases/avalanche/avalanche-44.jpg', alt: 'Image 44' },
				{ src: '/images/cases/avalanche/avalanche-45.jpg', alt: 'Image 45' },
				{ src: '/images/cases/avalanche/avalanche-46.jpg', alt: 'Image 46' },
				{ src: '/images/cases/avalanche/avalanche-47.jpg', alt: 'Image 47' },
				{ src: '/images/cases/avalanche/avalanche-48.jpg', alt: 'Image 48' },
				{ src: '/images/cases/avalanche/avalanche-49.jpg', alt: 'Image 49' },
				{ src: '/images/cases/avalanche/avalanche-50.jpg', alt: 'Image 50' }
			]
		}
	];

	let faqItems = [
		{
			question: 'Do you work only in France?',
			answer: 'Answer 1'
		},
		{
			question: 'Do you photograph and film weddings together?',
			answer: 'Answer 2'
		},
		{
			question: 'How would you describe your approach on the wedding day?',
			answer: 'Answer 3'
		},
		{
			question: 'How many hours of coverage do we need?',
			answer: 'Answer 4'
		},
		{
			question: 'Do you offer multi-day coverage?',
			answer: 'Answer 5'
		},
		{
			question: 'Do you use drones?',
			answer: 'Answer 6'
		},
		{
			question: 'How long does it take to receive our photos and films?',
			answer: 'Answer 7'
		},
		{
			question: 'Is your pricing the same for every couple?',
			answer: 'Answer 8'
		},
		{
			question: 'Do you offer content creation for social media?',
			answer: 'Answer 9'
		}
	];

	let testimonials = [
		{
			quote: 'This video is so epic!!! You can’t imagine how much everyone was in awe I don think many people have seen such a level of professional skills!!! Thank you so much!! I gotta say we had an awesome couple of days with you guys and we’ll never forget it we are thinking we should do wedding number 4 and simply continue we are loving the party',
			author: 'S & A'
		},
		{
			quote: 'This video is so epic!!!',
			author: 'S & A'
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
							'name': 'Etats Studio'
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
	title=""
	description=""
	{robots}
	{imageUrl}
/>

<PageContent>
	<HeroSimple
		image={{
			src: '/images/hero-simple-image.jpg',
			alt: '',
		}}
		title="Switzerland corporat event photography and videography"
		text="Delivering top-quality corporate event photo and video services in Switzerland for a multi-day company meeting. We're always delighted to collaborate with clients who appreciate the importance of exceptional event photography and videography."
	/>
	<Logos
		text="Clients we’ve worked with"
		items={logoItems}
	/>
	<Cta
		label="September"
		sup="2023"
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i> A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<MediaGallery
		title="FILMS + PHOTO"
		items={mediaGalleryItems}
	/>
	<Feedback
		card={{
		type:"image",
		image: { src: '/images/cases/woah/woah-03.jpg' },
		date:"2025.10.28",
		category:"Photography",
		title:"WOAH",
		place:"Geneva International Conference Center",
		location:"Geneva",
		price:"",
		coverage:"",
		hoveredImages: [
			{ src: '/images/cases/woah/woah-03.jpg', alt: 'Image 1' },
			{ src: '/images/cases/woah/woah-12.jpg', alt: 'Image 2' },
			{ src: '/images/cases/woah/woah-18.jpg', alt: 'Image 3' },
		],
		popupImages: [
			{ src: '/images/cases/woah/woah-01.jpg', alt: 'Image 1' },
			{ src: '/images/cases/woah/woah-02.jpg', alt: 'Image 2' },
			{ src: '/images/cases/woah/woah-03.jpg', alt: 'Image 3' },
			{ src: '/images/cases/woah/woah-04.jpg', alt: 'Image 4' },
			{ src: '/images/cases/woah/woah-05.jpg', alt: 'Image 5' },
			{ src: '/images/cases/woah/woah-06.jpg', alt: 'Image 6' },
			{ src: '/images/cases/woah/woah-07.jpg', alt: 'Image 7' },
			{ src: '/images/cases/woah/woah-08.jpg', alt: 'Image 8' },
			{ src: '/images/cases/woah/woah-09.jpg', alt: 'Image 9' },
			{ src: '/images/cases/woah/woah-10.jpg', alt: 'Image 10' },
			{ src: '/images/cases/woah/woah-11.jpg', alt: 'Image 11' },
			{ src: '/images/cases/woah/woah-12.jpg', alt: 'Image 12' },
			{ src: '/images/cases/woah/woah-13.jpg', alt: 'Image 13' },
			{ src: '/images/cases/woah/woah-14.jpg', alt: 'Image 14' },
			{ src: '/images/cases/woah/woah-15.jpg', alt: 'Image 15' },
			{ src: '/images/cases/woah/woah-16.jpg', alt: 'Image 16' },
			{ src: '/images/cases/woah/woah-17.jpg', alt: 'Image 17' },
			{ src: '/images/cases/woah/woah-18.jpg', alt: 'Image 18' },
			{ src: '/images/cases/woah/woah-19.jpg', alt: 'Image 19' },
			{ src: '/images/cases/woah/woah-20.jpg', alt: 'Image 20' },
			{ src: '/images/cases/woah/woah-21.jpg', alt: 'Image 21' },
			{ src: '/images/cases/woah/woah-22.jpg', alt: 'Image 22' },
			{ src: '/images/cases/woah/woah-23.jpg', alt: 'Image 23' },
			{ src: '/images/cases/woah/woah-24.jpg', alt: 'Image 24' },
			{ src: '/images/cases/woah/woah-25.jpg', alt: 'Image 25' },
			{ src: '/images/cases/woah/woah-26.jpg', alt: 'Image 26' },
			{ src: '/images/cases/woah/woah-27.jpg', alt: 'Image 27' },
			{ src: '/images/cases/woah/woah-28.jpg', alt: 'Image 28' },
			{ src: '/images/cases/woah/woah-29.jpg', alt: 'Image 29' },
			{ src: '/images/cases/woah/woah-30.jpg', alt: 'Image 30' },
			{ src: '/images/cases/woah/woah-31.jpg', alt: 'Image 31' },
			{ src: '/images/cases/woah/woah-32.jpg', alt: 'Image 32' },
			{ src: '/images/cases/woah/woah-33.jpg', alt: 'Image 33' },
			{ src: '/images/cases/woah/woah-34.jpg', alt: 'Image 34' },
			{ src: '/images/cases/woah/woah-35.jpg', alt: 'Image 35' },
			{ src: '/images/cases/woah/woah-36.jpg', alt: 'Image 36' },
			{ src: '/images/cases/woah/woah-37.jpg', alt: 'Image 37' },
			{ src: '/images/cases/woah/woah-38.jpg', alt: 'Image 38' },
			{ src: '/images/cases/woah/woah-39.jpg', alt: 'Image 39' },
			{ src: '/images/cases/woah/woah-40.jpg', alt: 'Image 40' },
			{ src: '/images/cases/woah/woah-41.jpg', alt: 'Image 41' },
			{ src: '/images/cases/woah/woah-42.jpg', alt: 'Image 42' },
			{ src: '/images/cases/woah/woah-43.jpg', alt: 'Image 43' },
			{ src: '/images/cases/woah/woah-44.jpg', alt: 'Image 44' },
			{ src: '/images/cases/woah/woah-45.jpg', alt: 'Image 45' },
			{ src: '/images/cases/woah/woah-46.jpg', alt: 'Image 46' },
			{ src: '/images/cases/woah/woah-47.jpg', alt: 'Image 47' },
			{ src: '/images/cases/woah/woah-48.jpg', alt: 'Image 48' },
			{ src: '/images/cases/woah/woah-49.jpg', alt: 'Image 49' },
			{ src: '/images/cases/woah/woah-50.jpg', alt: 'Image 50' }
		]
	}}
		{testimonials}
	/>
	<Packages
		videoUrl="/videos/video-example.mp4"
		titleLeft={true}
		title="packages"
		text="Our pricing stays consistent - regardless of venue, background, or location."
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


