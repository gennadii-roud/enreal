<script lang="ts">
	interface Props {
		opened?: boolean;
	}

	let { opened = $bindable(false) }: Props = $props();
</script>

<button
  class="menu-button hide-tablet-up"
  aria-label="Toggle menu"
	aria-expanded={opened}
	aria-controls="mobile-menu"
	onclick={() => opened = !opened}
>
	{opened ? 'close' : 'menu'}
</button>

<style lang="scss">
  .menu-button {
    align-items: center;
    appearance: none;
    background-color: rgba( 235, 235, 235, 0.8);
    backdrop-filter: blur(12px);
    border: none;
    border-radius: .3rem;
    box-shadow: none;
    color: currentColor;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    max-width: 100%;
    margin-bottom: .3rem;
    min-height: 3.8rem;
    min-width: 7.2rem;
    outline: none;
    overflow: hidden;
    padding: .9rem 1.3rem;
    pointer-events: auto;
    position: relative;
    text-align: center;
    text-decoration: none;
  }
</style>