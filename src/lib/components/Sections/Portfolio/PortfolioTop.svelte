<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	interface Props {
		title?: string;
		text?: string;
	}

	let { title, text }: Props = $props();
</script>

<div class="portfolio-top">
	{#if title}
		<Title>{title}</Title>
	{/if}
	{#if text}
		<div class="portfolio-top__text">{text}</div>
	{/if}
</div>

<style lang="scss">
  .portfolio-top {
    display: grid;
    margin-bottom: 1.8rem;

    @include media(tablet-down) {
      gap: 1.8rem;
    }

    @include media(laptop-up) {
      grid-template-columns: repeat(2, auto);
      justify-content: space-between;
    }

    :global(.title) {
      @include media(laptop-up) {
        order: 2;
        margin-left: auto;
      }
    }

    &__text {
      font-weight: 600;
      max-width: 31rem;

      @include media(tablet-up) {
        max-width: 32.6rem;
        order: 1;
      }

      @include media(laptop-up) {
        margin-top: 7.5rem;
        padding-left: .8rem;
      }
    }
  }
</style>

