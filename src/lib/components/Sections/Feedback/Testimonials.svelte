<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import SliderControls from '$lib/components/SliderControls.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	import icon from '$lib/svg/quote.svg?raw';

	interface Props {
		testimonials?: TestimonialsProps[];
	}

	let { testimonials }: Props = $props();

	let slider: Slider | undefined = $state();
</script>

<div class="testimonials">
	{#if testimonials?.length}
		<div class="testimonials__slider">
			<Slider
				items={testimonials}
				bind:this={slider}
				options={{
  				loop: true,
  				duration: 50
				}}
				plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
			>
				{#snippet slide(item)}
				<div class="testimonials__slide">
					{#if icon}
						<div class="testimonials__icon">{@html icon}</div>
					{/if}
					{#if item.quote}
						<div class="testimonials__quote">{item.quote}</div>
					{/if}
					{#if item.author}
						<div class="testimonials__author">- {item.author}</div>
					{/if}
				</div>
				{/snippet}
			</Slider>
			<div class="testimonials__slider-controls">
				<SliderControls {slider} />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
  .testimonials {
    &__slider {
      overflow: hidden;
    }

    &__slider {
      --slider-gap: 1rem;
      --slide-flex-basis: 100%;
			position: relative;
    }

    &__slide {
      cursor: grab;
      display: flex;
      flex-direction: column;
			height: 100%;
      line-height: 1;

      @include media(tablet-up) {
        min-height: 31.2rem;
      }
    }

    &__slider-controls {
      @include media(mobile) {
				display: flex;
				justify-content: flex-end;
        padding-top: .4rem;
      }

      @include media(tablet-up) {
        bottom: 0;
        position: absolute;
        right: 0;
      }
    }

    &__icon {
      margin-bottom: 1.8rem;
      max-height: 1.9rem;
      max-width: 2.3rem;

      :global(svg) {
        display: block;
        fill: currentColor;
        height: 100%;
        width: 100%;
      }
    }

    &__quote {
      font-weight: 500;
      font-size: 2.2rem;
			flex-grow: 1;

      @include media(tablet-up) {
        font-size: 2.4rem;
        margin-bottom: 2rem;
      }
    }

    &__author {
      font-weight: 600;
      justify-self: flex-end;
      padding-top: 2rem;

			@include media(tablet-up) {
        padding-bottom: 1.4rem;
        padding-right: 12rem;
			}
    }
  }
</style>
