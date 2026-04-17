<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';

	interface Props {
		video?: VideoAttributes;
		title?: string;
		text?: string;
	}

	let { video, title, text }: Props = $props();
</script>

<section class="hero-main">
	<div class="hero-main__background">
		{#if video?.src}
			<Video src={video.src} />
		{/if}
	</div>
	<div class="center">
		<div class="hero-main__inner">
			{#if title || text}
				<div class="hero-main__content">
					{#if title}
						<Title tag="h1">{@html title}</Title>
					{/if}
					{#if text}
						<div class="hero-main__text">{@html text}</div>
					{/if}
				</div>
			{/if}
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

      :global(video) {
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    :global(.center) {
      flex-grow: 1;
    }

    &__inner {
      align-items: flex-end;
      color: var(--white);
			display: flex;
      height: 100%;
      padding-bottom: 2rem;
      padding-top: 11.8rem;
      position: relative;

      @include media(tablet-up) {
        padding-top: 20rem;
      }
    }

		&__content {
      display: grid;

			@include media(mobile) {
        gap: 2rem;
			}

      @include media(tablet-up) {
        align-items: end;
				justify-content: space-between;
        grid-template-columns: 49.6% 25%;
      }

			@include media(desktop-up) {
        grid-template-columns: 49.6% 15.4%;
      }
		}

		&__text {
			display: flex;
			align-items: flex-end;
		}
  }
</style>

