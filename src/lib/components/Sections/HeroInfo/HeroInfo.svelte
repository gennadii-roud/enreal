<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';

	interface Props {
		title?: string;
		image?: ImageAttributes;
	}

	let { title, image }: Props = $props();
</script>

<section class="hero-info">
	<div class="hero-info__background">
		{#if image}
			<Image data={image} className="full-image" />
		{/if}
	</div>
	<div class="center">
		<div class="hero-info__inner">
			{#if title}
				<Title tag="h1">{title}</Title>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
  .hero-info {
    background-color: var(--placeholder);
    display: flex;
    min-height: 55rem;
    overflow: hidden;
    position: relative;

		:global(.center) {
			flex-grow: 1;
		}

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
      align-items: flex-end;
			display: flex;
      min-height: 50rem;
      padding: 10rem 0 3rem;
			position: relative;

      @include media(tablet-up) {
        padding-bottom: 5rem;
      }

			:global(.title) {
				color: var(--white);
			}
    }
  }
</style>

