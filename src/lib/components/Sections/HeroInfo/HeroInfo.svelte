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
	<div class="center">
		<div class="hero-info__inner">
			<div class="hero-info__info">
				{#if title}
					<Title tag="h1">{title}</Title>
				{/if}
			</div>
			<div class="hero-info__image">
				{#if image}
					<Image data={image} className="full-image"/>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  .hero-info {
    background-color: var(--grey-light);
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;

    &__inner {
      display: grid;
      gap: 3rem;
      padding: 10rem 0 3rem;

      @include media(tablet-up) {
        align-items: end;
				grid-template-columns: repeat(2, calc(50% - 1rem));
				justify-content: space-between;
        min-height: 65rem;
        padding-bottom: 5rem;
      }

      @include media(laptop-up) {
        grid-template-columns: calc(60% - 1rem) calc(40% - 1rem);
      }
    }

    &__info {}

		&__image {
      aspect-ratio: 1.1;
      background-color: var(--grey-light);
      border-radius: 1rem;
      overflow: hidden;
		}
  }
</style>

