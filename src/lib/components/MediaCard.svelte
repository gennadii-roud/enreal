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
		category,
		title,
		place,
		location,
    hoveredImages,
    popupImages,		
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
		{#if date || category}
			<div class="media-card__left">
				{#if date}
					<div>{date}</div>
				{/if}
				{#if category}
					<div>{category}</div>
				{/if}
			</div>
		{/if}
		{#if title || place || location}
			<div class="media-card__right">
				{#if title}
					<h3 class="media-card__title">{title}</h3>
				{/if}
				{#if place || location}
					<div class="media-card__right-inner">
						{#if place}
							<div>{place}</div>
						{/if}
						{#if location}
							<div>{location}</div>
						{/if}
					</div>
				{/if}
			</div>
		{/if}
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

      :global(img),
      :global(video) {
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
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
      display: flex;
      font-size: 1.5rem;
      justify-content: space-between;
      padding: 1rem 0;

      @include media(tablet-up) {
        padding-top: 1.2rem;
      }
    }

    &__left, &__right-inner {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      line-height: 1.1;

      @media (max-width: 401px) {
        font-size: 1.4rem;
      }
    }

    &__left {
      margin-right: 2rem;
    }

    &__right {
      display: flex;
      gap: 1rem;

      @include media(laptop-up) {
        gap: 4rem;
      }
    }

    &__title {
      font-family: 'Libertinus Serif', serif;
      font-size: 4.2rem;

      @media (max-width: 401px) {
        font-size: 3rem;
      }
    }

    &__right-inner {
      text-align: right;
    }
  }
</style>