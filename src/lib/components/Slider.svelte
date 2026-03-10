<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import type { Snippet } from 'svelte';
	import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';

	type SliderOptionsType = EmblaOptionsType;

	interface SliderState {
		initialized?: boolean;
		totalSnapPoints?: number | null;
		currentSnapPoint?: number | null;
		canScrollNext?: boolean;
		canScrollPrev?: boolean;
	}

	interface Props {
		items?: any[];
		options?: SliderOptionsType;
		plugins?: EmblaPluginType[];
		slide?: Snippet<[any, number, SliderState]>;
	}

	let { items, options = { align: 'start' }, plugins = [], slide }: Props = $props();

	let emblaParameter = $derived({ options, plugins });
	let emblaApi: EmblaCarouselType;
	let sliderState: SliderState = $state({});

	function updateState() {
		sliderState = {
			initialized: true,
			totalSnapPoints: emblaApi.scrollSnapList()?.length,
			currentSnapPoint: emblaApi.selectedScrollSnap(),
			canScrollNext: emblaApi.canScrollNext(),
			canScrollPrev: emblaApi.canScrollPrev(),
		}
	}

	const handleInit = async (event: CustomEvent) => {
		emblaApi = event.detail;
		emblaApi.on('init', updateState);
		emblaApi.on('reInit', updateState);
		emblaApi.on('select', updateState);
		emblaApi.on('resize', updateState);
		updateState();
	};

	export function scrollPrev() {
		emblaApi?.scrollPrev();
	}

	export function scrollNext() {
		emblaApi?.scrollNext();
	}

	export function scrollTo(index: number, jump?: boolean) {
		emblaApi?.scrollTo(index, jump);
	}

	export function getSliderState() {
		return sliderState;
	}

	export function getSlidesInView() {
		return emblaApi?.slidesInView();
	}
</script>

<div
	class="slider"
	use:emblaCarouselSvelte={emblaParameter}
	onemblaInit={handleInit}
>
	<div class="slider__inner">
		{#if slide && items?.length}
			{#each items as item, index}
				<div class="slider__slide">
					{@render slide(item, index, sliderState)}
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
  .slider {
    &__inner {
      display: flex;
      gap: var(--slider-gap, 0);
    }

    &__slide {
      flex: 0 0 var(--slide-flex-basis, 100%);
      min-width: 0;
    }
  }
</style>