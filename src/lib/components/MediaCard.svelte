<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';
	import icon from '$lib/svg/play.svg?raw';

	let {
		type,
		video,
		play,
		image,
		date,
		title,
		location,
		hoveredImages,
		onclick
	}: MediaCardProps = $props();

	let currentImageIndex = $state(0);
	let intervalId: ReturnType<typeof setInterval> | null = null;
	let isHovered = $state(false);

	function startSlides() {
		if (!hoveredImages || hoveredImages.length === 0) return;

		isHovered = true;
		currentImageIndex = 1;
		intervalId = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % hoveredImages.length;
		}, 1000);
	}

	function stopSlides() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
		isHovered = false;
		currentImageIndex = 0;
	}

	const currentImage = $derived(
		type === 'image' && isHovered && hoveredImages && hoveredImages.length > 0
			? hoveredImages[currentImageIndex]
			: image
	);
</script>

<div class="media-card">
	{#if type === 'image' && currentImage?.src}
		<div
			class="media-card__media"
			onmouseenter={startSlides}
			onmouseleave={stopSlides}
			onclick={onclick}
		>
			<Image data={currentImage} />
		</div>
	{/if}
	{#if type === 'video' && video?.src}
		<div
			class="media-card__media"
			onclick={onclick}
		>
			<Video src={video.src} {play} />
			<div class="media-card__play">{@html icon}</div>
		</div>
	{/if}
	<div class="media-card__info">
		{#if title}
			<h3 class="media-card__title">{title}</h3>
		{/if}
		<div class="media-card__details">
			{#if date}
				<div>{date}</div>
			{/if}
			{#if location}
				<div>{location}</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
  .media-card {
    cursor: pointer;

    &__media {
      aspect-ratio: 1.67;
      background-color: var(--placeholder);
      border-radius: .5rem;
      overflow: hidden;
      position: relative;

      @include media(tablet-up) {
        aspect-ratio: 1.72;
      }

      :global {
        img, video {
          display: block;
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }

    &__play {
      bottom: 2rem;
      height: 2.2rem;
      left: 2rem;
      position: absolute;
      width: 2rem;

      :global(svg) {
        display: block;
        fill: var(--white);
        height: 100%;
        width: 100%;
      }
    }

    &__info {
			align-items: flex-end;
      display: grid;
      gap: 1rem;
      padding: 1.2rem 0;

      @include media(tablet-up) {
        grid-template-columns: 60% calc(40% - 1rem);
      }
    }

    &__title {
      font-size: 3rem;
      line-height: 1;
      overflow-wrap: break-word;
      width: 100%;

			@include media(laptop-up) {
        font-size: 4.2rem;
      }
    }

		&__details {
      display: grid;
      font-size: 1.5rem;
      gap: .4rem;
      line-height: 1.3;
			
      @include media(tablet-up) {
        text-align: right;
      }
		}
  }
</style>