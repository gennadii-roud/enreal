<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let { label, items, text }: FeaturedCardProps = $props();

	let slider: Slider | undefined = $state();
</script>

<div class="featured-card hide-mobile">
	{#if label}
		<h4 class="featured-card__label">{label}</h4>
	{/if}
	{#if items?.length}
		<div class="featured-card__slider">
			<Slider
				items={items}
				bind:this={slider}
				options={{
  				loop: true,
  				duration: 50
				}}
				plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
			>
				{#snippet slide(item)}
				<div class="featured-card__slide">
					{#if item.image}
						<Image data={item.image} className="full-image"/>
					{/if}
				</div>
				{/snippet}
			</Slider>
		</div>
	{/if}
	{#if text}
		<div>{text}</div>
	{/if}
</div>

<style lang="scss">
  .featured-card {
    background-color: var(--white);
    border-radius: .4rem;
    color: var(--black);
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
    justify-content: space-between;
    min-height: 39rem;
    padding: .9rem 1.4rem;
    row-gap: 1.5rem;
    width: 43.4%;

		&__label {
      line-height: 1.1;
			text-transform: uppercase;
			width: 20%;
		}

    &__slider, &__slide {
      border-radius: .4rem;
      overflow: hidden;
		}

		&__slider {
      --slider-gap: 1rem;
      --slide-flex-basis: 100%;
      width: 63.4%;
		}

		&__slide {
      aspect-ratio: .666;
      background-color: var(--placeholder);
			cursor: grab;
		}
  }
</style>