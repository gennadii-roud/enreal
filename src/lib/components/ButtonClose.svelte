<script lang="ts">
	interface Props extends LinkData {
		onclick?: ((e: MouseEvent) => void) | (() => void);
	}

	let { onclick }: Props = $props();
</script>

<div class="close-btn" onclick={onclick}></div>

<style lang="scss">
  .close-btn {
		color: var(--black);
    cursor: pointer;
    height: 3rem;
    position: relative;
		transition: opacity .2s;
    width: 3rem;

    @include media(laptop-up) {
      height: 4.2rem;
      width: 4.2rem;
    }

    &::before,
    &::after {
      content: '';
      background-color: currentColor;
      height: .2rem;
      left: calc(50% - 1.5rem);
      position: absolute;
      top: calc(50% - .1rem);
      transform: rotate(45deg);
      width: 3rem;

			@include media(laptop-up) {
        width: 4.2rem;
			}
    }

    &::after {
      transform: rotate(-45deg);
    }

		&:hover {
			opacity: .8;
		}
  }
</style>

