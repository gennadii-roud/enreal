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
					<div class="mobile-menu__links">
						{#each mainNav as item}
							<a href={item.url}
								 onclick={(e) => handleClick(e, item)}
								 class="mobile-menu__link"
                 aria-label="Navigate to {item.labelMobile}"
							>
								{item.labelMobile}
							</a>
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

    &__links {
      @include flex-column;
      gap: 1.2rem;
    }

    &__link {
      display: inline-flex;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 1.1;
      padding: .5rem 0;
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
  }
</style>

