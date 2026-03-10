<script lang="ts">
	import FeaturedCard from '$lib/components/Sections/HeroMain/FeaturedCard.svelte';
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';

	interface Props {
		video?: VideoAttributes;
		title?: string;
		label?: string;
		text?: string;
		featuredCard?: FeaturedCardProps;
	}

	let { video, title, label, text, featuredCard }: Props = $props();
</script>

<section class="hero-main">
	<div class="hero-main__background">
		{#if video?.src}
			<Video src={video.src} />
		{/if}
	</div>
	<div class="center">
		<div class="hero-main__inner">
			{#if title}
				<Title tag="h1">{@html title}</Title>
			{/if}
			<div class="hero-main__content">
				{#if label || text}
					<div class="hero-main__info">
						<h4 class="hero-main__label">{label}</h4>
						<div class="hero-main__text">{@html text}</div>
					</div>
				{/if}
				<FeaturedCard {...featuredCard}/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  .hero-main {
    background-color: var(--placeholder);
    display: flex;
    min-height: 92vh;
    min-height: 92dvh;
    overflow: hidden;
    position: relative;

    &__background {
      inset: 0;
      position: absolute;

      &::after {
        content: '';
        background-color: var(--placeholder);
        position: inherit;
        inset: inherit;
      }
    }

    &__inner {
      color: var(--white);
      display: flex;
      height: 100%;
      justify-content: space-between;
      padding-bottom: 2rem;
      padding-top: 11.8rem;
      position: relative;

			@include media(mobile) {
				flex-direction: column;
			}

      @include media(tablet-up) {
        align-items: flex-end;
				flex-wrap: wrap;
        padding-top: 20rem;
      }

      :global(.title) {
				@include media(laptop-down) {
          margin-bottom: 3rem;
				}

        @include media(tablet-up) {
          width: 100%;
        }

				@include media(desktop-up) {
					width: 36%;
				}
      }
    }

    &__content {
      align-items: flex-end;
      display: flex;

      @include media(mobile) {
				flex-direction: column;
      }

      @include media(tablet-up) {
        justify-content: space-between;
      }

      @include media(desktop-up) {
        width: 49.5%;
      }
    }

    &__info {
			display: flex;
      font-weight: 600;
      justify-content: space-between;

			@include media(tablet-up) {
        justify-content: space-between;
				width: calc(50% - 1rem);
			}

      @include media(desktop-up) {
        width: 43%;
      }
    }

    &__label {
      text-transform: uppercase;
      width: 20%;
    }

    &__text {
      width: 63%;

      @include media(desktop-up) {
        width: 74.1%;
      }
    }
  }
</style>

