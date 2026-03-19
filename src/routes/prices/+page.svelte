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
			question: "Do you work only in France?",
			answer: "Answer 1",
		},
		{
			question: "Do you photograph and film weddings together?",
			answer: "Answer 2",			
		},
		{
			question: "How would you describe your approach on the wedding day?",
			answer: "Answer 3",		
		},
		{
			question: "How many hours of coverage do we need?",
			answer: "Answer 4",
		},
		{
			question: "Do you offer multi-day coverage?",
			answer: "Answer 5",			
		},
		{
			question: "Do you use drones?",
			answer: "Answer 6",		
		},
		{
			question: "How long does it take to receive our photos and films?",
			answer: "Answer 7",
		},
		{
			question: "Is your pricing the same for every couple?",
			answer: "Answer 8",			
		},
		{
			question: "Do you offer content creation for social media?",
			answer: "Answer 9",		
		}
	]

		const schema = $derived.by(() => {
		const schemaPackages = {
		  "@context": "https://schema.org",
		  "@type": "OfferCatalog",
		  "name": "Photography Packages",
		  "itemListElement": packagesData.flatMap(item =>
		    item.coverage.map((coverageItem, index) => ({
		      "@type": "Offer",
		      "name": `${item.description} – ${coverageItem.number}h`,
		      "description": item.note
		        ? `${item.description}. ${item.note}`
		        : item.description,
		      "price": Number(coverageItem.price.replace(/,/g, "")),
		      "priceCurrency": "EUR",
		      "availability": "https://schema.org/InStock",
		      "category": "Photography Service",
		      "itemOffered": {
		        "@type": "Service",
		        "name": item.description,
		        "provider": {
		          "@type": "ProfessionalService",
		          "name": "Etats Studio"
		        }
		      },
		      "addOn": item.additionalFeatures?.map(feature => ({
		        "@type": "Offer",
		        "name": feature.name,
		        "price": Array.isArray(feature.price)
		          ? feature.price[index]
		          : feature.price,
		        "priceCurrency": "EUR"
		      }))
		    }))
		  )
		};

		const schemaFaq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer || ""
        }
      }))
    };

  	const combinedSchema = [schemaPackages, schemaFaq];

	return `
      <script type="application/ld+json">${JSON.stringify(combinedSchema)}</script${''}>
    ` // hack to fix parser in editor
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


