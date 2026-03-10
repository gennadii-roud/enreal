<script lang="ts">
	import ButtonClose from '$lib/components/ButtonClose.svelte';
	import NoScroll from './NoScroll.svelte';

	import type { Snippet } from 'svelte';

	import { fade, fly } from 'svelte/transition';

	interface Props {
		children?: Snippet;
    onclose?: () => void;
	}

	let { children, onclose }: Props = $props();

	let popupHeight = $state(0);
  let oncloseClick = () => {  
    onclose?.();  
  };
</script>

<NoScroll />

<div class="popup">
	<div
		class="overlay"
		transition:fade
    onclick={oncloseClick}
	>
	</div>
	<div
		class="popup__inner"
		bind:clientHeight={popupHeight}
		transition:fly={{ y: popupHeight }}
	>
		<div class="popup__content">
			{@render children?.()}
		</div>
		<div class="popup__button-close">
      <ButtonClose onclick={oncloseClick} />
		</div>
	</div>
</div>

<style lang="scss">
  .popup {
    inset: 0;
    position: fixed;
    z-index: 1001;

    &__inner {
      background-color: var(--white);
      border-radius: .5rem .5rem 0 0;
      bottom: 0;
      position: absolute;
      right: 0;
      max-height: 91dvh;
      max-height: 91dvh;
      overflow-y: auto;
      scrollbar-width: none;
      width: 100%;

      @include media(tablet-up) {
        width: 70%;
      }

      @include media(desktop-up) {
        width: 49.55%;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__button-close {
      position: inherit;
      right: 1.5rem;
      top: 1.5rem;

      @include media(tablet-up) {
        right: 2.4rem;
        top: 2.4rem;
      }

      @include media(laptop-up) {
        right: 5.6rem;
      }
    }
  }
</style>
