<script lang="ts">
	import { handleNavigation } from '$lib/utils/handleNavigation';

	interface Props {
		opened?: boolean;
		mainNav: MainNavProps[];
	}

	let { opened = $bindable(false), mainNav }: Props = $props();
</script>

<nav
	class="header-nav hide-mobile"
	aria-label="Header navigation"
>
	{#if mainNav?.length}
		{#each mainNav as link}
			<a
				href={link.url}
				class="header-nav__link"
				onclick={(e) => handleNavigation(e, link)}
			>
				{link.labelDesktop}
			</a>
		{/each}
	{/if}
</nav>

<style lang="scss">
  .header-nav {
		display: flex;
		gap: .8rem;
    position: relative;
    pointer-events: auto;

    &__link {
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
      min-height: 3.8rem;
      min-width: 7.2rem;
      outline: none;
      overflow: hidden;
      padding: .9rem 1.3rem;
      position: relative;
      text-align: center;
      text-decoration: none;
			transition: opacity .2s;

			&:hover {
				opacity: .8;
			}
    }
  }
</style>