<script lang="ts">
	import HeaderNav from '$lib/components/Header/HeaderNav.svelte';
	import MenuButton from '$lib/components/Header/MenuButton.svelte';
	import MenuMobile from '$lib/components/Header/MenuMobile.svelte';
	import NoScroll from '$lib/components/NoScroll.svelte';

	import { mainNav } from '$lib/data/mainNav';
	import { contactData } from '$lib/data/contactData';

	import logo from '$lib/svg/logo.svg?raw';
  import logoMobile from '$lib/svg/logo-mobile.svg?raw';
  import logoMinified from '$lib/svg/logo-minified.svg?raw';

  import logoDark from '$lib/stores/logoDark';
	import openPopupForm from '$lib/stores/openPopupForm';
	import PopupForm from '$lib/components/PopupForm.svelte';
	import ContactForm from '$lib/components/Sections/ContactForm/ContactForm.svelte';

  import {scrollDisabled} from '$lib/components/NoScroll.svelte';

  const maxScroll = 30;
	const minScale = 0.3;

	let mobileMenuOpened: boolean = $state(false);
	let scrollTop: number = $state(0);
	let logoScale: number = $state(1);
  let headerMinified = $state(false);
  let showMinifiedLogo = $state(false);

	$effect(() => {		
		const progress = Math.min(scrollTop / maxScroll, 1);
		logoScale = 1 - (progress * (1 - minScale));
	});

  $effect(() => {
    if(scrollTop > 10) {
      headerMinified = true;
    } else {
      if($scrollDisabled) return;
      headerMinified = false;
    } 
    if(scrollTop >= maxScroll) {
      showMinifiedLogo = true;
    } else {
      if($scrollDisabled) return;
      showMinifiedLogo = false;
    }
  });
</script>

<svelte:window bind:scrollY={scrollTop} />

<header
	class="header"
	class:header-mobile-menu={mobileMenuOpened}
  class:header-minified={headerMinified}
  class:logo-dark={$logoDark}
>
	<div class="center">
		<div class="header__inner">	  
      <a href="/" class="header__logo-container" aria-label="Go to homepage">
        <div
			  	class="header__logo-main"
			  	class:filled={mobileMenuOpened}
          class:hidden={showMinifiedLogo}
			  	style="--logo-scale: {logoScale}"
			  >      
	        <div class="header__logo hide-laptop-up">
	        	{@html logoMobile}
	        </div>
	        <div class="header__logo hide-tablet-down">
	        	{@html logo}
	        </div>    
			  </div>

        <div class="header__logo-minified" class:visible={showMinifiedLogo}>{@html logoMinified}</div>
      </a>  
        
			<MenuButton bind:opened={mobileMenuOpened} />
			<HeaderNav {mainNav} />
		</div>
	</div>
</header>

{#if mobileMenuOpened}
	<NoScroll />
	<MenuMobile bind:opened={mobileMenuOpened} {mainNav} {contactData}/>
{/if}

{#if $openPopupForm}
	<PopupForm
    onclose={() => openPopupForm.set(false)}
  >
		<ContactForm
			title="So it begins ..."
		/>
	</PopupForm>
{/if}

<style lang="scss">
  .header {
    left: 0;
    position: fixed;
    right: 0;
    top: 1rem;
    pointer-events: none;
    transition: top .2s .2s;
    z-index: 999;

    &.header-minified {
      @include media(tablet-down) {
        top: -1rem;
      }

      :global(.header-nav) {
        @include media(laptop-up) {
          transform: translateY(0);
        }
      }
    }

    &.logo-dark {
      .header__logo {
        :global(svg path) {
          fill: var(--black);
        }
      }
    }

    &__inner {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;

      @include media(laptop-up) {
        align-items: flex-start;
      }

      :global(.header-nav) {
        transition: transform .2s;

        @include media(laptop-up) {
          transform: translateY(2rem);
        }
      }
    }

    &__logo-container {
			align-items: flex-end;
      display: inline-flex;
      position: relative;

      @include media(tablet-down) {
        height: 6.4rem;
        width: 38.4rem;
      }
    }

    &__logo-main {
      display: inline-flex;   
      pointer-events: auto;     

      @include media(tablet-down) {
        margin-right: 1.5rem;     
        transition: opacity .2s .2s;
        position: absolute;
        //top: 0.7rem;
      }

      @include media(laptop-up) {
        height: 14.7rem;
        position: relative;
        width: 50.7rem;
     
        transform: scale(var(--logo-scale));
        transform-origin: left top;
        transition: transform 0.2s ease-out, opacity 0.2s;
      }

      &.filled {
        :global(svg path) {
          fill: var(--black);
        }
      }

      &.hidden {
        opacity: 0;
	      pointer-events: none;
        // position: absolute;
        
        @include media(tablet-down)  {
          transition: opacity 0s;
        }
      }
    }

    &__logo-minified {
      align-self: flex-end;
      background-color: rgba( 235, 235, 235, 0.8);
      backdrop-filter: blur(12px);
      border-radius: 0.5rem;
      margin-bottom: 0.3rem;
      padding: 0.6rem;

      position: absolute;
	    top: 3.5rem;
	    transform: translateY(-50%) scale(0.9);
	    opacity: 0;
	    pointer-events: none;
	    transition: opacity 0.2s 0s ease, transform 0.2s ease, left .2s;

      @include media(tablet-down) {
        left: -10rem;
      }

      &.visible {
        opacity: 1;
	      transform: translateY(-50%) scale(1);
	      pointer-events: auto;
        top: 4rem;
        transition: opacity 0.3s ease, left .2s .1s;

        @include media(tablet-down) {
          left: 0;
        }

        @include media(laptop-up) {
          top: 2rem;
          transition: opacity 0.3s 0.2s ease;
        }
      }

      :global(svg path) {
        fill: var(--black);
      }
    }

    &__logo {
      @include media(laptop-up) {
        inset: 0;
        position: absolute;
      }

      :global {
        svg {
          display: block;
          height: 100%;
          width: 100%;

          path {
            fill: var(--white);
          }
        }
      }
    }
  }
</style>