<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import { handleNavigation } from '$lib/utils/handleNavigation';
	import { slide } from 'svelte/transition';
	import icon from '$lib/svg/hand.svg?raw';

	interface Props {
		opened?: boolean;
		mainNav?: MainNavProps[];
		contactData?: ContactDataProps[];
	}

	let { opened = $bindable(false), mainNav, contactData }: Props = $props();

	const handleClick = (e: MouseEvent, item: any) => {
		handleNavigation(e, item);
		opened = false;
	};

	let activeItem = $state(-1);

	const toggleSubmenu = (i: number) => {
		activeItem = activeItem === i ? -1 : i;
	}

	const closeMenu = () => {
		opened = false;
		activeItem = -1;
	};
</script>

<div
  class="mobile-menu hide-tablet-up"
  id="mobile-menu"
  aria-label="Mobile menu"
	hidden={!opened}
  transition:slide={{ duration: 200 }}
>
	<div class="mobile-menu__inner">
		<div class="mobile-menu__content">
			<div class="mobile-menu__top">
				{#if mainNav?.length}
					<div class="mobile-menu__items">
						{#each mainNav as item, i}
							{#if item.type === 'submenu'}
								<div
									class="mobile-menu__item"
									onclick={() => toggleSubmenu(i)} aria-label="Open submenu"
									class:active={activeItem === i}
								>
									<button class="mobile-menu__button">
										{item.labelMobile}
									</button>
									{#if activeItem === i}
										<div
											class="mobile-menu__submenu"
											class:opened={activeItem === i}
										>
											{#each item.submenu as sub}
												<a
													href={sub.url}
													class="mobile-menu__submenu-item"
													onclick={(e) => {
													handleNavigation(e, sub);
													closeMenu();
												}}
												>
													{sub.label}
												</a>
											{/each}
										</div>
									{/if}
								</div>
							{:else}
								<a href={item.url}
								   onclick={(e) => handleClick(e, item)}
								   class="mobile-menu__item"
								   aria-label="Navigate to {item.labelMobile}"
								>
									{item.labelMobile}
								</a>
							{/if}
						{/each}
					</div>
				{/if}
				<div class="mobile-menu__icon">{@html icon}</div>
			</div>
			<Contact bind:opened {contactData}/>
		</div>
	</div>
</div>

<style lang="scss">
  @mixin flex-column {
    display: flex;
    flex-direction: column;
  }

  .mobile-menu {
    background-color: var(--white);
    inset: 0;
    overflow: hidden;
    position: fixed;
    z-index: 998;

    &__inner {
      display: flex;
      height: 100%;
      padding: 12rem 1.5rem 2.5rem;
    }

    &__content {
      @include flex-column;
      justify-content: space-between;
      overflow: auto;
      width: 100%;
    }

    &__top {
      @include flex-column;
      gap: 1.6rem;
      margin-bottom: 2rem;
    }

    &__items {
      @include flex-column;
      gap: 1.2rem;
    }

    &__item, &__button {
      appearance: none;
      background-color: transparent;
      border: none;
      display: inline-flex;
      box-shadow: none;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 1.1;
      max-width: 100%;
      outline: none;
      padding: .5rem 0;
      text-decoration: none;

			&.active {
				flex-direction: column;
			}
    }

    &__icon {
      max-height: 5.5rem;
      max-width: 2.6rem;
      margin-left: 2.1rem;

      :global(svg) {
        display: block;
        fill: currentColor;
        height: 100%;
        width: 100%;
      }
    }

		&__submenu {
      display: grid;
      grid-template-rows: 0fr;

      &.opened {
        grid-template-rows: 1fr;
        padding-left: 2rem;
        padding-top: 1rem;
      }
		}

		&__submenu-item {
			display: inline-flex;
      padding: 1rem 0;
		}
  }
</style>

