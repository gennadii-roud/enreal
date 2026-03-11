<script lang="ts">
	import Button from '$lib/components/Button.svelte';
  import ButtonClose from '$lib/components/ButtonClose.svelte';
	import openPopupForm from '$lib/stores/openPopupForm';

	interface Props {
		title?: string;
		videoUrl?: string;
		place?: string;
		location?: string;
		date?: string;
		category?: string;
		price?: string;
		coverage?: string;
    onclose?: () => void;
	}

	let { title, videoUrl, place, location, date, category, price, coverage, onclose }: Props = $props();

  let oncloseClick = () => {  
    onclose?.();  
  };
</script>

<div class="video-details">
  <div class="video-details__top hide-tablet-up">
		{#if title}
			<h3 class="video-details__title">{title}</h3>
		{/if}
    <div class="video-details__button-close">
			<ButtonClose onclick={oncloseClick} />
		</div>
	</div>

	<div class="video-details__info">
		{#if title}
			<h3 class="video-details__title hide-mobile">{title}</h3>
		{/if}
		<div class="video-details__items">
			{#if place || location}
				<div class="video-details__item">
					{#if place}
						<div>{place}</div>
					{/if}
					{#if location}
						<div>{location}</div>
					{/if}
				</div>
			{/if}
			{#if date || category}
				<div class="video-details__item">
					{#if date}
						<div>{date}</div>
					{/if}
					{#if category}
						<div>{category}</div>
					{/if}
				</div>
			{/if}
			{#if price || coverage}
				<div class="video-details__item">
					{#if price}
						<div>{price}</div>
					{/if}
					{#if coverage}
						<div>{coverage}</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
	<div class="video-details__buttons">
		<Button onclick={() => openPopupForm.set(true)}>check availability</Button>
		<Button url="/prices" color="white">see packages</Button>
	</div>
	<div class="video-details__frame">
		{#if videoUrl}
			<iframe src={videoUrl}></iframe>
		{/if}
	</div>
</div>

<style lang="scss">
  .video-details {
    display: grid;
    gap: 2rem;
    font-weight: 400;
    line-height: 1;

    @include media(tablet-up) {
      grid-template-columns: 38% 56%;
      justify-content: space-between;
    }

    @include media(desktop-up) {
      grid-template-columns: 30.4% 43.9%;
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

    &__info {
      display: grid;
      gap: 1.6rem;   
    }

    &__title {
      //font-family: 'Libertinus Serif', serif;
      font-size: 4.2rem;
      padding-right: 4rem;
      text-transform: uppercase;
    }

    &__items {
			// display: flex;
			// flex-direction: column;
      display: grid;
			gap: 1.2rem;
      padding-bottom: 1.2rem;
      padding-top: 1.4rem;

      @include media(mobile) {
        padding-top: 7rem;
      }

      @include media(laptop-up) {
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
      }
		}

    &__item {
      display: inherit;
      font-size: 1.5rem;
      gap: .5rem;

      @include media(laptop-up) {
        &:first-child, &:nth-child(2) {
          grid-column: 1;
        }

        &:last-child {
          grid-column: 2;
        }
      }
    }

    &__buttons {
      align-self: flex-end;
      display: flex;
      gap: .8rem;

      @include media(tablet-up) {
        justify-content: flex-end;
        width: 100%;
      }

      :global(.button) {
        border-radius: .5rem;

        @include media(desktop-up) {
          width: calc(50% - .4rem);
        }
      }
    }

    &__frame {
      aspect-ratio: 2.01;
      background-color: var(--placeholder);

      @include media(tablet-up) {
        grid-column: 1 / -1;
      }

      :global {
        iframe {
          display: block;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>

