<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';

	interface Props {
		title?: string;
		text?: string;
		image?: ImageAttributes;
		inverted?: boolean;
	}

	let { title, text, image, inverted }: Props = $props();
</script>

<section
	class="info-section section"
	class:inverted
>
	<div class="center">
		<div class="info-section__inner">
			<div class="info-section__info">
				{#if title}
					<Title tag="h1">{title}</Title>
				{/if}
				{#if text}
					<div class="info-section__text">{@html text}</div>
				{/if}
			</div>
			<div class="info-section__image">
				{#if image}
					<Image data={image} className="full-image"/>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
  .info-section {

    &__inner {
      display: grid;

			@include media(mobile) {
        gap: 3rem;
      }

      @include media(tablet-up) {
        align-items: center;
        grid-template-columns: repeat(2, calc(50% - 1rem));
        justify-content: space-between;
      }

      @include media(laptop-up) {
        grid-template-columns: calc(60% - 1rem) calc(40% - 1rem);

				.inverted & {
          grid-template-columns: calc(40% - 1rem) calc(60% - 1rem);
				}
      }
    }

    &__info {
			display: grid;
			gap: 2rem;

			.inverted & {
				order: 2;
				justify-content: flex-end;
			}
		}

		&__text {
			:global(p:not(:last-child)) {
        margin-bottom: 1rem;
			}
		}

    &__image {
      aspect-ratio: 1.5;
      background-color: var(--grey-light);
      border-radius: 1rem;
      overflow: hidden;

      .inverted & {
        order: 1;
      }
    }
  }
</style>

