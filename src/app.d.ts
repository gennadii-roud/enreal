// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: { RESEND_API_KEY: string };
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties
		}
	}

	declare const SPA_MODE: boolean;

	interface Meta {
		canonical?: string;
		description?: string;
		imageUrl?: string;
		robots?: string;
		title?: string
	}

	interface LinkData {
		label?: string;
		targetBlank?: boolean;
		url?: string;
		color?: string
	}

	interface ImageAttributes {
		alt?: string;
		height?: string | number;
		sizes?: string;
		src?: string;
		srcset?: string;
		width?: string | number
	}

	interface VideoAttributes { src?: string; play?: boolean; poster?: ImageAttributes }

	interface MainNavProps {
		labelMobile?: string;
		labelDesktop?: string;
		url?: string;
		type?: string
	}

	interface ContactDataProps { label?: string; linkLabel?: string; url?: string }

	interface FeaturedCardProps {
		label?: string;
		items?: { image?: ImageAttributes }[];
		text?: string
	}

	interface PackageCardProps {
		description?: string;
		isPopular?: boolean;
		note?: string;
		coverage?: { number: string; price: string }[];
		includeList?: string[][];
		additionalFeatures?: { name: string; price: number[] }[]
	}

	interface MediaCardProps {
		index?: number;
		type: 'image' | 'video';
		video?: VideoAttributes;
		videoUrl?: string;
		play?: boolean;
		image?: ImageAttributes;
		date?: string;
		category?: string;
		title?: string;
		place?: string;
		location?: string;
		price?: string;
		coverage?: string;
		hoveredImages?: { src: string; alt?: string }[];
		popupImages?: { src: string; alt?: string }[];
		onclick?: ((e: MouseEvent) => void) | (() => void)
	}

	interface TestimonialsProps { text?: string; author?: string }

	interface GridContentItem {
		type: "image" | "video" | "textual";
		wide?: boolean;
		image?: ImageAttributes;
		video?: VideoAttributes;
		title?: string;
		name?: string;
		text?: string
	}
}

export {};
