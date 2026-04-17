<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Image from '$lib/components/Image.svelte';
	import Title from '$lib/components/Title.svelte';
	import openPopupForm from '$lib/stores/openPopupForm';

	interface Props {
		title?: string;
		text?: string;
		button?: LinkData;
		image?: ImageAttributes;
		inverted?: boolean;
	}

	let { title, text, image, button, inverted }: Props = $props();
</script>

<section
	class="info-section section"
	class:inverted
>
	<div class="center">
		<div class="info-section__inner">
			<div class="info-section__image">
				{#if image}
					<Image data={image} className="full-image" />
				{/if}
			</div>
			<div class="info-section__info">
				{#if title}
					<Title tag="h1">{@html title}</Title>
				{/if}
				{#if text}
					<div class="info-section__text">{@html text}</div>
				{/if}
				{#if button}
					<Button color={button.color} onclick={() => openPopupForm.set(true)}>{button.label}</Button>
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
        gap: 2rem;
        grid-template-columns: repeat(2, calc(50% - 1rem));
      }

      @include media(laptop-up) {
        grid-template-columns: 49.6% 33%;
        gap: 7.2rem;

        .inverted & {
          grid-template-columns: 33% 49.6%;
					justify-content: space-between;
					gap: unset;
        }
      }
    }

    &__info {
      display: grid;
      gap: 1.5rem;

      @include media(laptop-up) {
        gap: 2.5rem;
      }

      .inverted & {
        order: 1;
      }

      :global {
        .title {
          font-weight: 600;

          @include media(tablet-up) {
            font-size: 4rem;
          }

          @include media(laptop-up) {
            font-size: 5.2rem;
          }
        }

        .button {
          min-width: 31.2rem;
					width: fit-content;

          @media(max-width: 401px) {
            min-width: 100%;
          }
        }

        ul {
          list-style: disc;
          padding-left: 2.7rem;

          li {
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    &__text {
      :global(p:not(:last-child)) {
        margin-bottom: 1rem;
      }
    }

    &__image {
      aspect-ratio: 1.49;
      background-color: var(--grey-light);
      border-radius: .5rem;
      overflow: hidden;

      .inverted & {
        order: 2;
      }
    }
  }
</style>

