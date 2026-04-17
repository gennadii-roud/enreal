<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import ButtonClose from '$lib/components/ButtonClose.svelte';
	import openPopupForm from '$lib/stores/openPopupForm';

	interface Props {
		title?: string;
		videoUrl?: string;
		location?: string;
		date?: string;
		onclose?: () => void;
	}

	let { title, videoUrl, location, date, onclose }: Props = $props();
	let mediaId: string = $state('');

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://fast.wistia.com/player.js';
		script.async = true;
		document.head.appendChild(script);
	});

	$effect(() => {
		if (videoUrl) {
			const match = videoUrl.match(/medias\/([a-z0-9]+)/);
			mediaId = match ? match[1] : '';

			if (mediaId) {
				const mediaScript = document.createElement('script');
				mediaScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
				mediaScript.async = true;
				mediaScript.type = 'module';
				document.head.appendChild(mediaScript);
			}
		}
	});

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
		<div class="video-details__info-inner">
			<div class="video-details__details">
				{#if location}
					<div>{location}</div>
				{/if}
				{#if date}
					<div>{date}</div>
				{/if}
			</div>
			<div class="video-details__buttons">
				<Button onclick={() => openPopupForm.set(true)}>check availability</Button>
				<Button url="/prices" color="white">see packages</Button>
			</div>
		</div>
	</div>

	<div class="video-details__frame">
		{#if mediaId}
			<wistia-player media-id={mediaId} aspect="1.7"></wistia-player>
		{/if}
		<!--{#if videoUrl}-->
		<!--	<iframe src={videoUrl}></iframe>-->
		<!--{/if}-->
	</div>

</div>

<style lang="scss">
  .video-details {
    display: grid;
    gap: 2rem;
    line-height: 1;

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
          background-color: currentColor;
          bottom: 0;
          height: 1px;
          left: 1rem;
          position: absolute;
          width: calc(100% - 2rem);
        }
      }
    }

    &__info {
      display: grid;
      gap: 1.6rem;

      @include media(mobile) {
        padding-top: 10rem;
      }
    }

		&__info-inner {
			display: flex;
      gap: 1.6rem;

			@include media(tablet-down) {
        flex-direction: column;
			}

      @include media(laptop-up) {
        align-items: flex-end;
				justify-content: space-between;
      }
		}

    &__title {
      font-size: 3.2rem;
      text-transform: uppercase;

      @include media(mobile) {
        padding-right: 2rem;
      }

      @include media(tablet-up) {
        font-size: 4.2rem;
      }
    }

    &__details {
      display: grid;
      gap: 1rem;
      padding-right: 2rem;
    }

    &__buttons {
      display: flex;
      gap: .8rem;
			flex-shrink: 0;

      @include media(laptop-up) {
        justify-content: flex-end;
      }

      :global(.button) {
        border-radius: .5rem;

        @include media(desktop-up) {
          width: calc(50% - .4rem);
        }
      }
    }
  }
</style>

