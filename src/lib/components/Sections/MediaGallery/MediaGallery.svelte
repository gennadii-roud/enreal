<script lang="ts">
	import MediaCard from '$lib/components/MediaCard.svelte';
	import PopupVideo from '$lib/components/PopupVideo.svelte';
	import Title from '$lib/components/Title.svelte';
	import VideoDetails from '$lib/components/VideoDetails.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';
	import ImageDetails from '$lib/components/ImageDetails.svelte';

	// import openPopupVideo from '$lib/stores/openPopupVideo';
	// import openPopupImage from '$lib/stores/openPopupImage';

	let openPopupVideo = $state(false);
	let openPopupImage = $state(false);

	interface Props {
		title?: string;
		items?: MediaCardProps[];
	}

	let { title, items }: Props = $props();

	let activeIndex: number | null = $state(null);
	let selectedItem: MediaCardProps | null = $state(null);

	const handleClick = (item: MediaCardProps) => {
		selectedItem = item;
		if (item.type === 'video') {
			openPopupVideo = true;
		} else if (item.type === 'image') {
			openPopupImage = true;
		}
	};
</script>

{#if openPopupImage && selectedItem?.type === 'image'}
	<PopupImage
		onclose={() => openPopupImage = false}
	>
		<ImageDetails
			title={selectedItem.title}
			place={selectedItem.place}
			location={selectedItem.location}
			date={selectedItem.date}
			category={selectedItem.category}
			price={selectedItem.price}
			coverage={selectedItem.coverage}
			popupImages={selectedItem.popupImages}
			onclose={() => openPopupImage = false}
		/>
	</PopupImage>
{/if}

{#if openPopupVideo && selectedItem?.type === 'video'}
	<PopupVideo
		onclose={() => openPopupVideo = false}
	>
		<VideoDetails
			title={selectedItem.title}
			videoUrl={selectedItem.videoUrl}
			place={selectedItem.place}
			location={selectedItem.location}
			date={selectedItem.date}
			category={selectedItem.category}
			price={selectedItem.price}
			coverage={selectedItem.coverage}	
			onclose={() => openPopupVideo = false}
		/>
	</PopupVideo>
{/if}

<section class="media-gallery section">
	<div class="center">
		{#if title}
			<Title>{title}</Title>
		{/if}
		{#if items?.length}
			<div class="media-gallery__items">
				{#each items as item, i}
					<div
						class="media-gallery__item"
						onmouseenter={() => activeIndex = i}
						onmouseleave={() => activeIndex = null}
					>
						<MediaCard
							{...item}
							play={activeIndex === i}
							onclick={() => handleClick(item)}
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
  .media-gallery {
    :global(.title) {
      margin-bottom: 2rem;

      @include media(mobile) {
        text-align: center;
      }
    }

    &__items {
      display: grid;
      gap: 2rem;

      @include media(tablet-up) {
        gap: 1.4rem;
        grid-template-columns: repeat(2, 1fr);
      }

      @include media(laptop-up) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__item {
      @include media(tablet) {
        &:nth-child(odd) {
          &:last-child {
            grid-column: 1 / -1;
            justify-self: center;
            max-width: calc(50% - .7rem);
          }
        }
      }
    }
  }
</style>

