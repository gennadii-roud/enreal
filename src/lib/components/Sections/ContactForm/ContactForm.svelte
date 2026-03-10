<script lang="ts">
	import Form from '$lib/components/Sections/ContactForm/Form.svelte';
	import Title from '$lib/components/Title.svelte';

	interface Props {
		title?: string;
	}

	let { title }: Props = $props();
</script>

<div class="contact">
	{#if title}
		<Title>{title}</Title>
	{/if}
	<Form />
</div>

<style lang="scss">
	.contact {
		color: var(--black);
		display: inline-grid;
		gap: 2rem;
    padding: 1.6rem 1rem 0;

		@include media(tablet-up) {
      padding: 2.4rem;
		}

		@include media(laptop-up) {
      padding: 4.6rem 5.3rem 9.2rem 4.4rem;
		}

		:global(.title) {
      padding-right: 4.5rem;
		}
	}
</style>