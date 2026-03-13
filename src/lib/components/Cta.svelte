<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import openPopupForm from '$lib/stores/openPopupForm';

	interface Props {
		label?: string;
		sup?: string;
		text?: string;
    button?: LinkData;
		nested?: boolean;
	}

	let { label, sup, text, button, nested = false }: Props = $props();

	const parentTag = nested ? 'div' : 'section';
	const parentClass = nested ? '' : 'section';
</script>

<svelte:element this={parentTag} class={`cta ${parentClass}`}>
	<div class="center">
		<div class="cta__inner">
			{#if label || sup}
				<div class="cta__label">
					{#if label}{label}{/if}
					{#if sup}<i class="cta__sup">{sup}</i>{/if}
				</div>
			{/if}
			{#if text}
				<div class="cta__text">{@html text}</div>
			{/if}
			{#if button && !nested}
				<Button url={button.url} color={button.color}>{button.label}</Button>
			{:else if button && nested}
				<Button color={button.color} onclick={() => openPopupForm.set(true)}>{button.label}</Button>
			{/if}
		</div>
	</div>
</svelte:element>

<style lang="scss">
  .cta {
		display: flex;
    position: relative;

    &__inner {
			align-items: center;
			display: flex;
			flex-direction: column;
			justify-self: center;
      text-align: center;

			@include media(tablet-up) {
				max-width: 81.2rem;
			}
    }

    &__label {
      display: inline-flex;
			font-weight: 600;
      margin-bottom: 1.2rem;
      line-height: 1.5;

      @include media(tablet-up) {
        margin-bottom: .9rem;
      }
    }

    &__sup {
			align-self: flex-start;
			font-size: 1.4rem;
      line-height: 1;
      margin-left: .5rem;
    }

    &__text {
      font-size: 2.2rem;
			font-weight: 500;
      line-height: 1.1;

			@include media(mobile) {
        padding: 0 1rem;
			}

      @include media(tablet-up) {
        font-size: 3.3rem;
        letter-spacing: -0.014em;
        line-height: 1.3;
      }

      :global(i) {
        font-size: 2.2rem;
        line-height: 1.2;

        @include media(tablet-up) {
          font-size: 3.3rem;
          letter-spacing: normal;
          line-height: 1.3;
        }
      }
    }

    :global(.button) {
      margin-top: 2.3rem;
      min-width: 31.2rem;

			@media(max-width: 401px) {
        width: 100%;
			}
    }
  }
</style>