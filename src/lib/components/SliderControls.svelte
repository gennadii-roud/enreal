<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import icon from '$lib/svg/arrow.svg?raw';

  interface Props {
		slider?: Slider;
  }

  let { slider }: Props = $props();

	const sliderState = $derived(slider?.getSliderState());
</script>

<div class="slider-controls" class:initialized={sliderState?.initialized} class:disabled={!sliderState?.canScrollPrev && !sliderState?.canScrollNext}>
  <div class="slider-controls__buttons">
    <button
      class="slider-controls__prev"
      class:disabled={!sliderState?.canScrollPrev}
      onclick={slider?.scrollPrev}
      aria-label="Previous Slide"
    >
      {@html icon}
    </button>
    <button
      class="slider-controls__next"
      class:disabled={!sliderState?.canScrollNext}
      onclick={slider?.scrollNext}
      aria-label="Next Slide"
    >
      {@html icon}
    </button>
  </div>
</div>

<style lang="scss">
	.slider-controls {
		align-items: center;
		display: flex;
    transition: opacity .2s ease;
		user-select: none;

		&__buttons {
			align-items: center;
			display: flex;
      gap: .8rem;
			justify-content: space-between;
			transition: opacity .2s ease;
		}

		&__prev,
		&__next {
      align-items: center;
      background-color: var(--grey-light);
      border: none;
      border-radius: .5rem;
      color: inherit;
      display: flex;
      flex-shrink: 0;
      height: 5rem;
      justify-content: center;
      overflow: hidden;
      padding: 0;
      transition: opacity .2s;
      width: 5rem;

			:global(svg) {
				display: block;
				fill: currentColor;
        max-height: 14px;
        max-width: 18px;
				position: relative;
				width: 100%;
			}

			&:hover {
				opacity: .7;
			}

			&.disabled {
				pointer-events: none;
				opacity: .2;
			}
		}

    &__prev {}

		&__next {
      :global(svg) {
        transform: rotate(180deg);
      }
		}

		&:not(.initialized) {
			opacity: 0;
			visibility: hidden;
		}

    &:global(.disabled) {
      display: none;
    }
	}
</style>
