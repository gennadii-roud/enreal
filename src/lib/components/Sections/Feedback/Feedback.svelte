<script lang="ts">
	import MediaCard from '$lib/components/MediaCard.svelte';
	import Testimonials from '$lib/components/Sections/Feedback/Testimonials.svelte';
	import ImageDetails from '$lib/components/ImageDetails.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';

	// import openPopupImage from '$lib/stores/openPopupImage';
	let openPopupImage = $state(false);

	interface Props {
		card?: MediaCardProps;
		testimonials?: TestimonialsProps[];
	}

	let { card, testimonials }: Props = $props();

	let selectedImage: MediaCardProps | null = $state(null);

	const handleImageClick = () => {
		if (card) {
			selectedImage = card;
			openPopupImage = true;
		}
	};
</script>

{#if openPopupImage && selectedImage}
	<PopupImage
		onclose={() => openPopupImage = false}
	>
		<ImageDetails
			title={selectedImage.title}
			place={selectedImage.place}
			location={selectedImage.location}
			date={selectedImage.date}
			category={selectedImage.category}
			price={selectedImage.price}
			coverage={selectedImage.coverage}
			popupImages={selectedImage.popupImages}
			onclose={() => openPopupImage = false}
		/>
	</PopupImage>
{/if}

<section class="feedback section">
	<div class="center">
		<div class="feedback__inner">
			{#if testimonials}
				<Testimonials {testimonials} />
			{/if}
			{#if card}
				<div onclick={handleImageClick}>
					<MediaCard {...card} />
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
  .feedback {
    &__inner {
      display: grid;

      @include media(mobile) {
        gap: 2rem;
      }

      @include media(tablet-up) {
        align-items: center;
        grid-template-columns: 52.7% 40.6%;
        justify-content: space-between;
        padding-right: 5.4vw;
      }

      :global {
        @include media(tablet-up) {
          .testimonials {
            order: 2;
          }

          .media-card {
            order: 1;

            &__right {
              @include media(desktop-up) {
                gap: 12.4rem;
              }
            }
          }
        }
      }
    }
  }
</style>

