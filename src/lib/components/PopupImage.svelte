<script lang="ts">
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
		{@render children?.()}
	</div>
</div>

<style lang="scss">
  .popup {
    inset: 0;
    position: fixed;
    z-index: 1000;

    &__inner {
      background-color: var(--white);
      bottom: 0;
      padding: 1.6rem 1rem 0;
      position: absolute;
      right: 0;
      height: 100vh;
      height: 100dvh;
      overflow-y: auto;
      scrollbar-width: none;
      width: 100%;

      @include media(tablet-up) {
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 3.2rem 3.2rem 0 2.8rem;
      }

      @include media(laptop-up) {
        width: 90%;
      }

			@include media(desktop-up) {
        width: 66%;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
