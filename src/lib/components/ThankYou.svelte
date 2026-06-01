<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Title from './Title.svelte';

	interface Props {
		title?: string;
		text?: string;
		link?: {
			url?: string,
			label?: string;
		};
	}

	let { title, link, text }: Props = $props();
</script>

<div class="thank-you">
	<div class="center">
		<div class="thank-you__inner">
			<div class="thank-you__content">
				{#if title}
					<Title tag="h1">{title}</Title>
				{/if}
				{#if text}
					<p class="thank-you__text">{text}</p>
				{/if}
				{#if link}
					<Button url={link.url} color="white">{link.label}</Button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
  .thank-you {
    background-color: var(--black);
    color: var(--white);
    display: flex;
    min-height: 100vh;

    &__inner {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      padding: 20rem 0 20rem;
    }

    &__content {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      text-align: center;
    }

    &__text {
      max-width: 60rem;
    }
  }
</style>



