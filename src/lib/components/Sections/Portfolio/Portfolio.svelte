<script lang="ts">
	import Case from '$lib/components/Sections/Portfolio/Case.svelte';
	import PortfolioTop from '$lib/components/Sections/Portfolio/PortfolioTop.svelte';

	interface Props {
		title?: string;
		text?: string;
		cases: MediaCardProps[];
	}

	let { title, text, cases }: Props = $props();
</script>

<div class="portfolio">
	<div class="center">
		{#if title || text}
			<PortfolioTop {title} {text} />
		{/if}
		<div class="portfolio__items">
			{#each cases as item}
				<div class="portfolio__item">
					<Case {...item} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
  .portfolio {
    padding-bottom: 4rem;
    padding-top: 9.7rem;

    @include media(laptop-up) {
      padding-bottom: 8rem;
      padding-top: 9.9rem;
    }

		&__items {
			display: flex;

			@include media(mobile) {
				flex-direction: column;
				gap: 2rem;
			}

			@include media(tablet-up) {
				flex-wrap: wrap;
				gap: 1.4rem;
				row-gap: 4rem;
			}

			@include media(laptop-up) {
				row-gap: 7.2rem;
			}
		}

		&__item {
			@include media(tablet-up) {
				&:nth-child(12n + 1),
  			&:nth-child(12n + 2),
  			&:nth-child(12n + 3) {
  			  width: calc((100% - 2 * 1.4rem) / 3);
  			}

				&:nth-child(12n + 4) {
					width: calc((100% - 1.4rem) / 2);
				}

				&:nth-child(12n + 5) {
					aspect-ratio: .877;
					margin-left: auto;
					width: calc((100% - 2 * 1.4rem) / 3);

					:global(.case) {
						height: 100%;
					}

					:global(.media-card) {
						display: flex;
						flex-direction: column;
						height: 100%;
					}

					:global(.media-card__media) {
						flex-grow: 1;
					}
				}

				&:nth-child(12n + 6),
				&:nth-child(12n + 7) {
					width: calc((100% - 2 * 1.4rem) / 4);
				}

				&:nth-child(12n + 8) {
					width: calc((100% - 2 * 1.4rem) / 2);
				}

				&:nth-child(12n + 9) {
  			  width: calc((100% - 2 * 1.4rem) / 3);
  			}

				&:nth-child(12n + 10) {
					margin-left: auto;
  			  width: calc((100% - 2 * 1.4rem) / 3);
  			}

				&:nth-child(12n + 11),
				&:nth-child(12n + 12) {
					width: calc((100% - 1.4rem) / 2);
				}
			}
		}
  }
</style>