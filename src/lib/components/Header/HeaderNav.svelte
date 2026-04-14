<script lang="ts">
	import { handleNavigation } from '$lib/utils/handleNavigation';
	import Dropdown from '$lib/components/Header/Dropdown.svelte';

	interface Props {
		opened?: boolean;
		mainNav: MainNavProps[];
	}

	let { opened = $bindable(false), mainNav }: Props = $props();

	let activeDropdown: string | null = $state(null);

	const handleDropdownHover = (type: string | undefined) => {
		if (type === 'dropdown') {
			activeDropdown = 'services';
		}
	}

	const handleDropdownLeave = () => {
		activeDropdown = null;
	}
</script>

<nav
	class="header-nav hide-mobile"
	aria-label="Header navigation"
	onmouseleave={handleDropdownLeave}
>
	{#if mainNav?.length}
		{#each mainNav as link}
			<a
				href={link.url}
				class="header-nav__link"
				onclick={(e) => handleNavigation(e, link)}
				onmouseenter={() => handleDropdownHover(link.type)}
			>
				{link.labelDesktop}
			</a>
		{/each}
	{/if}

	{#if activeDropdown === 'services'}
		<Dropdown/>
	{/if}
</nav>

<style lang="scss">
  .header-nav {
		display: flex;
		gap: .8rem;
    position: relative;
    pointer-events: auto;

    &::after {
      content: '';
      height: 1.5rem;
      left: 0;
      position: absolute;
			right: 0;
      top: 100%;
    }

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