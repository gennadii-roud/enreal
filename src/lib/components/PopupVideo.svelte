<script lang="ts">
	import ButtonClose from '$lib/components/ButtonClose.svelte';
	import NoScroll from './NoScroll.svelte';

	import type { Snippet } from 'svelte';

	import { fade, fly } from 'svelte/transition';

	import openPopupVideo from '$lib/stores/openPopupVideo';

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
		<div class="popup__button-close hide-mobile">
			<ButtonClose onclick={oncloseClick} />
		</div>
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
        padding: 3rem;
        width: 80%;
      }

			@include media(laptop-up) {
        width: 66%;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__content {}

    &__button-close {
      position: inherit;
      right: 1.5rem;
      top: 1.5rem;

      // @include media(mobile) {
      //   position: fixed;
      //   top: 2.5rem;
      //   z-index: 3;
      // }

      @include media(tablet-up) {
        right: 3rem;
        top: 3rem;
      }
    }
  }
</style>
