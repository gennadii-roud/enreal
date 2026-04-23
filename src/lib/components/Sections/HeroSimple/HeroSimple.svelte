<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';

	interface Props {
		video?: VideoAttributes;
		image?: ImageAttributes;
		title?: string;
		text?: string;
		small?: boolean;
	}

	let { video, image, title, text, small }: Props = $props();
</script>

<section
	class="hero-simple"
	class:small
>
	<div class="hero-simple__background">
		{#if video?.src}
			<Video src={video.src} />
		{/if}
		{#if image}
			<Image data={image} />
		{/if}
	</div>
	<div class="center">
		<div class="hero-simple__inner">
			<div class="hero-simple__content">
				{#if title}
					<Title tag="h1">{@html title}</Title>
				{/if}
				{#if text}
					<div class="hero-simple__text">{@html text}</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  .hero-simple {
    background-color: var(--placeholder);
    display: flex;
    min-height: 50rem;
    overflow: hidden;
    position: relative;

    @include media(tablet-up) {
      min-height: 55rem;
    }

    @include media(laptop-up) {
      min-height: 71.2rem;
    }

    &.small {
      @include media(laptop-up) {
        min-height: 52rem;
      }
    }

    &__background {
      inset: 0;
      position: absolute;

      &::after {
        content: '';
        background-color: rgba(0, 0, 0, .3);
        inset: inherit;
        position: inherit;
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

    :global {
      .center {
        flex-grow: 1;
      }

      .title {
        font-weight: 700;
        text-transform: none;

        @include media(mobile) {
          margin-bottom: 2rem;
        }

        @include media(tablet-up) {
          width: 55%;
        }

        @include media(laptop-up) {
          width: 50%;
        }

        @include media(desktop-up) {
          width: 40.5%;
        }
      }
    }

    &__inner {
      align-items: flex-end;
      color: var(--white);
      display: flex;
      height: 100%;
      padding-bottom: 3rem;
      padding-top: 11.8rem;
      position: relative;

      @include media(laptop-up) {
        padding-bottom: 3.7rem;
      }
    }

    &__content {
      @include media(tablet-up) {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }

    &__text {
      @include media(tablet-up) {
        align-self: flex-end;
        width: 40%;
      }

      @include media(laptop-up) {
        width: 35%;
      }

      @include media(desktop-up) {
        max-width: 22rem;
      }

      @include media(hd) {
        max-width: 30rem;
      }
    }
  }
</style>
