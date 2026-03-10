<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';

	import { contactData } from '$lib/data/contactData';
	import { footerData } from '$lib/data/footer';
	import { mainNav } from '$lib/data/mainNav';

	import icon from '$lib/svg/hand.svg?raw';
	import logo from '$lib/svg/logo.svg?raw';

	import { handleNavigation } from '$lib/utils/handleNavigation';
</script>

<footer class="footer">
	<div class="center">
		<div class="footer__inner">
			{#if logo}
				<a href='/' class="footer__logo hide-tablet-up" aria-label="Go to homepage">{@html logo}</a>
			{/if}
			{#if mainNav?.length}
				<nav class="footer__nav">
					{#each mainNav as item, i}
						<a
							href={item.url}
							class="footer__nav-link"
							onclick={(e) => handleNavigation(e, item)}
						>
							{item.labelMobile}
						</a>
						{#if i === mainNav.length - 2}
							<div class="footer__nav-icon">{@html icon}</div>
						{/if}
					{/each}
				</nav>
			{/if}
			<div class="footer__bottom">
				<Contact contactData={contactData} />
				{#if footerData.rights}
					<p class="footer__rights">{footerData.rights}</p>
				{/if}
				{#if logo}
					<a href='/' class="footer__logo hide-mobile" aria-label="Go to homepage">{@html logo}</a>
				{/if}
				{#if footerData.link}
					<a
						href={footerData.link.url}
						target={footerData.link.targetBlank ? "_blank" : "_self"}
						class="footer__bottom-link"
					>
						{footerData.link.label}
					</a>
				{/if}
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--black);
    color: var(--white);

    &__inner {
      display: grid;
      gap: 4.5rem;
      padding-bottom: 1.3rem;
      padding-top: 3rem;

      @include media(tablet-up) {
        gap: 12.8rem;
        padding-bottom: 2rem;
        padding-top: 2.7rem;
      }
    }

    &__logo, &__nav-icon {
      :global(svg) {
        display: block;
        fill: var(--white);
        height: 100%;
        width: 100%;
      }
    }

    &__logo {
      display: inline-flex;
      max-width: 35.3rem;

      @include media(tablet-up) {
				grid-row: 2 / 4;
        max-width: 49.2rem;
      }
    }

    &__nav {
      display: grid;

      @include media(mobile) {
        gap: 1rem;
        text-align: center;
      }

      @include media(tablet-up) {
        align-items: center;
        grid-template-areas: "link01 . link02 . link03 . icon . link04";
        grid-template-columns: auto 4% auto 4% auto 4% auto 2.1rem auto;
      }

      @include media(desktop-up) {
        grid-template-columns: auto 7.2% auto 12.5% auto 8.6% auto 2.1rem auto;
      }
    }

    &__nav-link {
			cursor: pointer;
      display: inline-flex;
      font-size: 3.2rem;
      line-height: 1.1;
      transition: opacity .2s;

      &:hover {
        opacity: .8;
      }

      @include media(mobile) {
        justify-self: center;
      }

      @include media(tablet-up) {
        font-size: 2rem;

        &:first-child {
          grid-area: link01;
        }

        &:nth-child(2) {
          grid-area: link02;
        }

        &:nth-child(3) {
          grid-area: link03;
        }

        &:last-child {
          grid-area: link04;
          justify-self: end;
        }
      }

      @include media(laptop-up) {
        font-size: 2.7rem;
      }

      @media (min-width: 1400px) {
        font-size: 3.2rem;
      }
    }

    &__nav-icon {
      flex-shrink: 0;
      max-height: 5.4rem;
      max-width: 2.5rem;
      transform: rotate(180deg);

      @include media(mobile) {
        justify-self: center;
        margin-bottom: .8rem;
        margin-top: 1.7rem;
      }

      @include media(tablet-up) {
        grid-area: icon;
        justify-self: end;
        transform: rotate(90deg);
      }
    }

    &__bottom {
      display: grid;

			@include media(mobile) {
				column-gap: 2rem;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
        row-gap: 3.7rem;
			}

			@include media(tablet-up) {
        align-items: end;
        grid-template-areas:
				"contact logo ."
				"contact logo ."
				"rights  logo link";
        grid-template-columns: 22.6% auto auto;
        row-gap: 4.7rem;
			}
    }

    :global(.contact) {
      @include media(mobile) {
        grid-column: 1 / -1;
      }

			@include media(tablet-up) {
        grid-area: contact;
        grid-row: 1 / 3;
        align-self: end;
      }
		}

    &__rights, &__bottom-link {
      color: var(--grey);
      font-weight: 500;
      line-height: 1.1;
		}

		&__rights {
      @include media(tablet-up) {
        grid-area: rights;
      }
		}

    &__bottom-link {
      transition: opacity .2s;

      @include media(tablet-up) {
        grid-area: link;
        justify-self: end;
      }

      &:hover {
        opacity: .8;
      }
    }
  }
</style>

