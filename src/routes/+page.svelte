<script lang="ts">
	import PageConfig from '$lib/components/PageConfig.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Faq from '$lib/components/Sections/Faq/Faq.svelte';
	import Feedback from '$lib/components/Sections/Feedback/Feedback.svelte';
	import HeroMain from '$lib/components/Sections/HeroMain/HeroMain.svelte';
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

	let featuredCardSliderImages = [
		{
			image: { src: '/images/featured-card-image-01.jpg' }
		},
		{
			image: { src: '/images/featured-card-image-01.jpg' }
		},
		{
			image: { src: '/images/featured-card-image-01.jpg' }
		}
	];

	let mediaGalleryItems: MediaCardProps[] = [
		{
			type: 'image',
			image: { src: '/images/cases/azeezat-and-roger/azeezat-and-roger.webp' },
			date: '????',
			category: 'Photography',
			title: 'A+R',
			place: 'Chateau Gassies',
			location: 'France',
			price: '????',
			coverage: '????',
			hoveredImages: [
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-55.webp', alt: 'Image 1' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-98.webp', alt: 'Image 2' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-99.webp', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-01.webp', alt: 'Image 1' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-02.webp', alt: 'Image 2' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-03.webp', alt: 'Image 3' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-04.webp', alt: 'Image 4' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-05.webp', alt: 'Image 5' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-06.webp', alt: 'Image 6' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-07.webp', alt: 'Image 7' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-08.webp', alt: 'Image 8' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-09.webp', alt: 'Image 9' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-10.webp', alt: 'Image 10' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-11.webp', alt: 'Image 11' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-12.webp', alt: 'Image 12' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-13.webp', alt: 'Image 13' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-14.webp', alt: 'Image 14' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-15.webp', alt: 'Image 15' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-16.webp', alt: 'Image 16' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-17.webp', alt: 'Image 17' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-18.webp', alt: 'Image 18' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-19.webp', alt: 'Image 19' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-20.webp', alt: 'Image 20' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-21.webp', alt: 'Image 21' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-22.webp', alt: 'Image 22' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-23.webp', alt: 'Image 23' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-24.webp', alt: 'Image 24' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-25.webp', alt: 'Image 25' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-26.webp', alt: 'Image 26' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-27.webp', alt: 'Image 27' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-28.webp', alt: 'Image 28' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-29.webp', alt: 'Image 29' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-30.webp', alt: 'Image 30' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-31.webp', alt: 'Image 31' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-32.webp', alt: 'Image 32' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-33.webp', alt: 'Image 33' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-34.webp', alt: 'Image 34' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-35.webp', alt: 'Image 35' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-36.webp', alt: 'Image 36' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-37.webp', alt: 'Image 37' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-38.webp', alt: 'Image 38' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-39.webp', alt: 'Image 39' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-40.webp', alt: 'Image 40' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-41.webp', alt: 'Image 41' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-42.webp', alt: 'Image 42' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-43.webp', alt: 'Image 43' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-44.webp', alt: 'Image 44' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-45.webp', alt: 'Image 45' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-46.webp', alt: 'Image 46' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-47.webp', alt: 'Image 47' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-48.webp', alt: 'Image 48' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-49.webp', alt: 'Image 49' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-50.webp', alt: 'Image 50' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-51.webp', alt: 'Image 51' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-52.webp', alt: 'Image 52' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-53.webp', alt: 'Image 53' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-54.webp', alt: 'Image 54' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-55.webp', alt: 'Image 55' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-56.webp', alt: 'Image 56' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-57.webp', alt: 'Image 57' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-58.webp', alt: 'Image 58' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-59.webp', alt: 'Image 59' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-60.webp', alt: 'Image 60' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-61.webp', alt: 'Image 61' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-62.webp', alt: 'Image 62' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-63.webp', alt: 'Image 63' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-64.webp', alt: 'Image 64' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-65.webp', alt: 'Image 65' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-66.webp', alt: 'Image 66' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-67.webp', alt: 'Image 67' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-68.webp', alt: 'Image 68' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-69.webp', alt: 'Image 69' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-70.webp', alt: 'Image 70' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-71.webp', alt: 'Image 71' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-72.webp', alt: 'Image 72' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-73.webp', alt: 'Image 73' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-74.webp', alt: 'Image 74' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-75.webp', alt: 'Image 75' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-76.webp', alt: 'Image 76' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-77.webp', alt: 'Image 77' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-78.webp', alt: 'Image 78' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-79.webp', alt: 'Image 79' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-80.webp', alt: 'Image 80' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-81.webp', alt: 'Image 81' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-82.webp', alt: 'Image 82' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-83.webp', alt: 'Image 83' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-84.webp', alt: 'Image 84' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-85.webp', alt: 'Image 85' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-86.webp', alt: 'Image 86' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-87.webp', alt: 'Image 87' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-88.webp', alt: 'Image 88' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-89.webp', alt: 'Image 89' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-90.webp', alt: 'Image 90' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-91.webp', alt: 'Image 91' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-92.webp', alt: 'Image 92' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-93.webp', alt: 'Image 93' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-94.webp', alt: 'Image 94' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-95.webp', alt: 'Image 95' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-96.webp', alt: 'Image 96' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-97.webp', alt: 'Image 97' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-98.webp', alt: 'Image 98' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-99.webp', alt: 'Image 99' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-100.webp', alt: 'Image 100' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-101.webp', alt: 'Image 101' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-102.webp', alt: 'Image 102' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-103.webp', alt: 'Image 103' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-104.webp', alt: 'Image 104' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-105.webp', alt: 'Image 105' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-106.webp', alt: 'Image 106' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-107.webp', alt: 'Image 107' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-108.webp', alt: 'Image 108' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-109.webp', alt: 'Image 109' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-110.webp', alt: 'Image 110' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-111.webp', alt: 'Image 111' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-112.webp', alt: 'Image 112' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-113.webp', alt: 'Image 113' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-114.webp', alt: 'Image 114' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-115.webp', alt: 'Image 115' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-116.webp', alt: 'Image 116' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-117.webp', alt: 'Image 117' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-118.webp', alt: 'Image 118' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-119.webp', alt: 'Image 119' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-120.webp', alt: 'Image 120' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-121.webp', alt: 'Image 121' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-122.webp', alt: 'Image 122' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-123.webp', alt: 'Image 123' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-124.webp', alt: 'Image 124' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-125.webp', alt: 'Image 125' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-126.webp', alt: 'Image 126' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-127.webp', alt: 'Image 127' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-128.webp', alt: 'Image 128' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-129.webp', alt: 'Image 129' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-130.webp', alt: 'Image 130' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-131.webp', alt: 'Image 131' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-132.webp', alt: 'Image 132' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-133.webp', alt: 'Image 133' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-134.webp', alt: 'Image 134' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-135.webp', alt: 'Image 135' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-136.webp', alt: 'Image 136' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-137.webp', alt: 'Image 137' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-138.webp', alt: 'Image 138' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-139.webp', alt: 'Image 139' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-140.webp', alt: 'Image 140' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-141.webp', alt: 'Image 141' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-142.webp', alt: 'Image 142' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-143.webp', alt: 'Image 143' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-144.webp', alt: 'Image 144' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-145.webp', alt: 'Image 145' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-146.webp', alt: 'Image 146' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-147.webp', alt: 'Image 147' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-148.webp', alt: 'Image 148' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-149.webp', alt: 'Image 149' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-150.webp', alt: 'Image 150' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-151.webp', alt: 'Image 151' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-152.webp', alt: 'Image 152' },
				{ src: '/images/cases/azeezat-and-roger/azeezat-and-roger-153.webp', alt: 'Image 153' }
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
			image: { src: '/images/cases/jared-and-molly/jared-and-molly.webp' },
			date: '????',
			category: 'Photography',
			title: 'J+M',
			place: 'Chateau Riguad',
			location: 'Saint-Émilion',
			price: '????',
			coverage: '????',
			hoveredImages: [
				{ src: '/images/cases/jared-and-molly/jared-and-molly-91.webp', alt: 'Image 1' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-122.webp', alt: 'Image 2' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-138.webp', alt: 'Image 3' }
			],
			popupImages: [
				{ src: '/images/cases/jared-and-molly/jared-and-molly-01.webp', alt: 'Image 1' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-02.webp', alt: 'Image 2' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-03.webp', alt: 'Image 3' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-04.webp', alt: 'Image 4' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-05.webp', alt: 'Image 5' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-06.webp', alt: 'Image 6' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-07.webp', alt: 'Image 7' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-08.webp', alt: 'Image 8' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-09.webp', alt: 'Image 9' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-10.webp', alt: 'Image 10' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-11.webp', alt: 'Image 11' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-12.webp', alt: 'Image 12' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-13.webp', alt: 'Image 13' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-14.webp', alt: 'Image 14' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-15.webp', alt: 'Image 15' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-16.webp', alt: 'Image 16' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-17.webp', alt: 'Image 17' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-18.webp', alt: 'Image 18' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-19.webp', alt: 'Image 19' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-20.webp', alt: 'Image 20' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-21.webp', alt: 'Image 21' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-22.webp', alt: 'Image 22' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-23.webp', alt: 'Image 23' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-24.webp', alt: 'Image 24' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-25.webp', alt: 'Image 25' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-26.webp', alt: 'Image 26' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-27.webp', alt: 'Image 27' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-28.webp', alt: 'Image 28' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-29.webp', alt: 'Image 29' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-30.webp', alt: 'Image 30' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-31.webp', alt: 'Image 31' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-32.webp', alt: 'Image 32' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-33.webp', alt: 'Image 33' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-34.webp', alt: 'Image 34' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-35.webp', alt: 'Image 35' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-36.webp', alt: 'Image 36' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-37.webp', alt: 'Image 37' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-38.webp', alt: 'Image 38' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-39.webp', alt: 'Image 39' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-40.webp', alt: 'Image 40' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-41.webp', alt: 'Image 41' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-42.webp', alt: 'Image 42' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-43.webp', alt: 'Image 43' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-44.webp', alt: 'Image 44' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-45.webp', alt: 'Image 45' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-46.webp', alt: 'Image 46' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-47.webp', alt: 'Image 47' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-48.webp', alt: 'Image 48' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-49.webp', alt: 'Image 49' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-50.webp', alt: 'Image 50' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-51.webp', alt: 'Image 51' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-52.webp', alt: 'Image 52' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-53.webp', alt: 'Image 53' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-54.webp', alt: 'Image 54' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-55.webp', alt: 'Image 55' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-56.webp', alt: 'Image 56' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-57.webp', alt: 'Image 57' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-58.webp', alt: 'Image 58' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-59.webp', alt: 'Image 59' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-60.webp', alt: 'Image 60' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-61.webp', alt: 'Image 61' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-62.webp', alt: 'Image 62' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-63.webp', alt: 'Image 63' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-64.webp', alt: 'Image 64' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-65.webp', alt: 'Image 65' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-66.webp', alt: 'Image 66' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-67.webp', alt: 'Image 67' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-68.webp', alt: 'Image 68' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-69.webp', alt: 'Image 69' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-70.webp', alt: 'Image 70' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-71.webp', alt: 'Image 71' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-72.webp', alt: 'Image 72' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-73.webp', alt: 'Image 73' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-74.webp', alt: 'Image 74' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-75.webp', alt: 'Image 75' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-76.webp', alt: 'Image 76' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-77.webp', alt: 'Image 77' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-78.webp', alt: 'Image 78' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-79.webp', alt: 'Image 79' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-80.webp', alt: 'Image 80' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-81.webp', alt: 'Image 81' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-82.webp', alt: 'Image 82' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-83.webp', alt: 'Image 83' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-84.webp', alt: 'Image 84' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-85.webp', alt: 'Image 85' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-86.webp', alt: 'Image 86' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-87.webp', alt: 'Image 87' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-88.webp', alt: 'Image 88' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-89.webp', alt: 'Image 89' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-90.webp', alt: 'Image 90' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-91.webp', alt: 'Image 91' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-92.webp', alt: 'Image 92' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-93.webp', alt: 'Image 93' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-94.webp', alt: 'Image 94' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-95.webp', alt: 'Image 95' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-96.webp', alt: 'Image 96' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-97.webp', alt: 'Image 97' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-98.webp', alt: 'Image 98' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-99.webp', alt: 'Image 99' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-100.webp', alt: 'Image 100' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-101.webp', alt: 'Image 101' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-102.webp', alt: 'Image 102' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-103.webp', alt: 'Image 103' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-104.webp', alt: 'Image 104' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-105.webp', alt: 'Image 105' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-106.webp', alt: 'Image 106' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-107.webp', alt: 'Image 107' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-108.webp', alt: 'Image 108' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-109.webp', alt: 'Image 109' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-110.webp', alt: 'Image 110' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-111.webp', alt: 'Image 111' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-112.webp', alt: 'Image 112' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-113.webp', alt: 'Image 113' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-114.webp', alt: 'Image 114' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-115.webp', alt: 'Image 115' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-116.webp', alt: 'Image 116' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-117.webp', alt: 'Image 117' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-118.webp', alt: 'Image 118' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-119.webp', alt: 'Image 119' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-120.webp', alt: 'Image 120' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-121.webp', alt: 'Image 121' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-122.webp', alt: 'Image 122' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-123.webp', alt: 'Image 123' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-124.webp', alt: 'Image 124' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-125.webp', alt: 'Image 125' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-126.webp', alt: 'Image 126' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-127.webp', alt: 'Image 127' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-128.webp', alt: 'Image 128' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-129.webp', alt: 'Image 129' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-130.webp', alt: 'Image 130' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-131.webp', alt: 'Image 131' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-132.webp', alt: 'Image 132' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-133.webp', alt: 'Image 133' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-134.webp', alt: 'Image 134' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-135.webp', alt: 'Image 135' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-136.webp', alt: 'Image 136' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-137.webp', alt: 'Image 137' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-138.webp', alt: 'Image 138' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-139.webp', alt: 'Image 139' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-140.webp', alt: 'Image 140' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-141.webp', alt: 'Image 141' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-142.webp', alt: 'Image 142' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-143.webp', alt: 'Image 143' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-144.webp', alt: 'Image 144' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-145.webp', alt: 'Image 145' },
				{ src: '/images/cases/jared-and-molly/jared-and-molly-146.webp', alt: 'Image 146' }
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
			'name': 'Etats Studio',
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
	title="Etats Studio | Wedding Photography & Video in Europe"
	description="We're a wedding photography and video duo in Europe, creating cinematic scenes and editorial portraits for couples who value atmosphere over spectacle."
	{robots}
	{imageUrl}
/>

<PageContent>
	<HeroMain
		video={{
			src: "/videos/video-example.mp4"
		}}
		title="We’re wedding<br/> photo + video content duo in France"
		label="vd"
		text="Quiet. Intentional. Built around people, place, and time. We document weddings across France for couples who care about atmosphere more than spectacle — light, movement, and moments that feel lived, not staged.- Gene"
		featuredCard={{
			label: 'ph',
			items: featuredCardSliderImages,
			text: 'Later, when I looked at the photographs again, I realized it wasn’t just the shots. It was the way their presence shaped the moment. - Dina',
		}}
	/>
	<Cta
		label="September"
		sup="2023"
		text="We chose to live by the wine & cheese. Good food. Long tables. Unhurried days. France.<i>A place where life moves at a different pace, and attention comes naturally.</i>This sense of space allows us to create."
	/>
	<MediaGallery
		title="FILMS + PHOTO"
		items={mediaGalleryItems}
	/>
	<Feedback
		card={{
		type:"image",
		image:{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-44.webp' },
		date:"????",
		category:"Photography",
		title:"V+R",
		place:"Chateau Le Petit Verdus",
		location:"Bordeaux, France",
		price:"????",
		coverage:"????",
		hoveredImages: [
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-15.webp', alt: 'Image 1' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-47.webp', alt: 'Image 2' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-84.webp', alt: 'Image 3' },
		],
		popupImages: [
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-01.webp', alt: 'Image 1' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-02.webp', alt: 'Image 2' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-03.webp', alt: 'Image 3' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-04.webp', alt: 'Image 4' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-05.webp', alt: 'Image 5' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-06.webp', alt: 'Image 6' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-07.webp', alt: 'Image 7' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-08.webp', alt: 'Image 8' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-09.webp', alt: 'Image 9' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-10.webp', alt: 'Image 10' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-11.webp', alt: 'Image 11' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-12.webp', alt: 'Image 12' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-13.webp', alt: 'Image 13' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-14.webp', alt: 'Image 14' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-15.webp', alt: 'Image 15' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-16.webp', alt: 'Image 16' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-17.webp', alt: 'Image 17' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-18.webp', alt: 'Image 18' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-19.webp', alt: 'Image 19' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-20.webp', alt: 'Image 20' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-21.webp', alt: 'Image 21' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-22.webp', alt: 'Image 22' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-23.webp', alt: 'Image 23' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-24.webp', alt: 'Image 24' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-25.webp', alt: 'Image 25' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-26.webp', alt: 'Image 26' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-27.webp', alt: 'Image 27' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-28.webp', alt: 'Image 28' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-29.webp', alt: 'Image 29' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-30.webp', alt: 'Image 30' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-31.webp', alt: 'Image 31' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-32.webp', alt: 'Image 32' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-33.webp', alt: 'Image 33' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-34.webp', alt: 'Image 34' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-35.webp', alt: 'Image 35' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-36.webp', alt: 'Image 36' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-37.webp', alt: 'Image 37' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-38.webp', alt: 'Image 38' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-39.webp', alt: 'Image 39' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-40.webp', alt: 'Image 40' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-41.webp', alt: 'Image 41' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-42.webp', alt: 'Image 42' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-43.webp', alt: 'Image 43' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-44.webp', alt: 'Image 44' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-45.webp', alt: 'Image 45' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-46.webp', alt: 'Image 46' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-47.webp', alt: 'Image 47' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-48.webp', alt: 'Image 48' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-49.webp', alt: 'Image 49' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-50.webp', alt: 'Image 50' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-51.webp', alt: 'Image 51' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-52.webp', alt: 'Image 52' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-53.webp', alt: 'Image 53' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-54.webp', alt: 'Image 54' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-55.webp', alt: 'Image 55' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-56.webp', alt: 'Image 56' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-57.webp', alt: 'Image 57' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-58.webp', alt: 'Image 58' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-59.webp', alt: 'Image 59' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-60.webp', alt: 'Image 60' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-61.webp', alt: 'Image 61' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-62.webp', alt: 'Image 62' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-63.webp', alt: 'Image 63' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-64.webp', alt: 'Image 64' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-65.webp', alt: 'Image 65' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-66.webp', alt: 'Image 66' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-67.webp', alt: 'Image 67' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-68.webp', alt: 'Image 68' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-69.webp', alt: 'Image 69' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-70.webp', alt: 'Image 70' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-71.webp', alt: 'Image 71' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-72.webp', alt: 'Image 72' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-73.webp', alt: 'Image 73' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-74.webp', alt: 'Image 74' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-75.webp', alt: 'Image 75' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-76.webp', alt: 'Image 76' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-77.webp', alt: 'Image 77' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-78.webp', alt: 'Image 78' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-79.webp', alt: 'Image 79' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-80.webp', alt: 'Image 80' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-81.webp', alt: 'Image 81' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-82.webp', alt: 'Image 82' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-83.webp', alt: 'Image 83' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-84.webp', alt: 'Image 84' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-85.webp', alt: 'Image 85' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-86.webp', alt: 'Image 86' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-87.webp', alt: 'Image 87' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-88.webp', alt: 'Image 88' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-89.webp', alt: 'Image 89' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-90.webp', alt: 'Image 90' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-91.webp', alt: 'Image 91' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-92.webp', alt: 'Image 92' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-93.webp', alt: 'Image 93' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-94.webp', alt: 'Image 94' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-95.webp', alt: 'Image 95' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-96.webp', alt: 'Image 96' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-97.webp', alt: 'Image 97' },
			{ src: '/images/cases/victoria-and-ryan/victoria-and-ryan-98.webp', alt: 'Image 98' },
		]
	}}
		{testimonials}
	/>
	<Cta
		label="Our services"
		sup="(5)"
		text="Wed. photography & film. <i>Cinematic scenes & editorial portraits.</i> Social-first content creation (reels & shorts) <i>Narrative approach & natural-light inspired aesthetic</i> Aerial coverage."
		button={{
			url: "/portfolio",
			label: "view all work",
			color: "transparent"
		}}
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


