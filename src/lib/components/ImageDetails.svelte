<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ButtonClose from '$lib/components/ButtonClose.svelte';
	import MasonryGallery from '$lib/components/MasonryGallery.svelte';

	import openPopupForm from '$lib/stores/openPopupForm';

	interface Props {
		title?: string;
		place?: string;
		location?: string;
		date?: string;
		category?: string;
		price?: string;
		coverage?: string;
		popupImages?: {
			src: string; 
			alt?: string 
		}[];
		onclose?: () => void;
	}

	let { title, place, location, date, category, price, coverage, popupImages, onclose}: Props = $props();

	let oncloseClick = () => {  
    onclose?.();  
  };
</script>

<div class="image-details">

	<div class="image-details__top hide-tablet-up">
		{#if title}
			<h3 class="image-details__title">{title}</h3>
		{/if}
		<div class="image-details__button-close">
			<ButtonClose onclick={oncloseClick} />
		</div>
	</div>

	<div class="image-details__aside-wrapper">
		<div class="image-details__aside">
			{#if title}
				<h3 class="image-details__title hide-mobile">{title}</h3>
			{/if}
			<div class="image-details__items">
				{#if place || location}
					<div class="image-details__item">
						{#if place}
							<div>{place}</div>
						{/if}
						{#if location}
							<div>{location}</div>
						{/if}
					</div>
				{/if}
				{#if date || category}
					<div class="image-details__item">
						{#if date}
							<div>{date}</div>
						{/if}
						{#if category}
							<div>{category}</div>
						{/if}
					</div>
				{/if}
				{#if price || coverage}
					<div class="image-details__item">
						{#if price}
							<div>{price}</div>
						{/if}
						{#if coverage}
							<div>{coverage}</div>
						{/if}
					</div>
				{/if}
			</div>
			<div class="image-details__buttons hide-mobile">
				<Button onclick={() => openPopupForm.set(true)}>check availability</Button>
				<Button color="white" url="/prices">see packages</Button>
			</div>
		</div>
	</div>

	{#if popupImages && popupImages.length > 0}
		<div class="image-details__images">
			<MasonryGallery items={popupImages} />
		</div>
	{/if}

	<div class="image-details__button-close-wrapper hide-mobile">
		<div class="image-details__button-close">
			<ButtonClose onclick={oncloseClick} />
		</div>
	</div>
</div>

<style lang="scss">
  @mixin sticky-top {
    position: sticky;
    top: 0;
	}

  @mixin flex-column {
    display: flex;
    flex-direction: column;
	}

  .image-details {
		display: grid;
    grid-template-columns: 80% auto;
		height: 100%;
		position: relative;
		width: 100%;

    @include media(mobile) {
      gap: 2rem;
    }

    @include media(tablet-up) {
      grid-template-columns: 28.6% 62.7% auto;
      justify-content: space-between;
    }

		@include media(laptop-up) {
      grid-template-columns: 21.6% 60.7% auto;
    }

		&__top {
      background-color: var(--white);
      display: flex;
      justify-content: space-between;
      left: 0;
      padding: 1.6rem 1rem 1rem;
      position: fixed;
      right: 0;
      top: 0;

			@include media(mobile) {
				align-items: center;
				z-index: 2;

				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 1rem;
					width: calc(100% - 2rem);
					height: 1px;
					background-color: currentColor;
				}
			}
		}

		&__aside-wrapper {
			@include media(mobile) {
				padding-top: 5.2rem;
			}
		}

    &__aside {
			@include media(tablet-up) {
        @include sticky-top;
			}
    }

    &__title {
      //font-family: 'Libertinus Serif', serif;
      font-size: 4.2rem;
      text-transform: uppercase;

			@include media(mobile) {
				margin-right: 2rem;
			}
    }

		&__items {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
      padding-bottom: 1.2rem;
      padding-top: 1.4rem;
		}

    &__item {
      @include flex-column;
      font-size: 1.5rem;
      gap: .5rem;
    }

    &__buttons {
      @include flex-column;
      gap: 1.1rem;
      padding-top: 1rem;

      :global(.button) {
        border-radius: .5rem;
      }
    }

    &__images {
			padding-bottom: 3rem;

      @include media(mobile) {
        grid-column: span 2;
      }

			@include media(laptop-up) {
				padding-bottom: 5rem;
			}
    }

		&__image {}

    &__button-close-wrapper {
			@include media(mobile) {
        right: .2rem;
        position: absolute;
        top: 0;
			}
		}

    &__button-close {
			@include media(tablet-up) {
        @include sticky-top;
			}
    }
  }
</style>

