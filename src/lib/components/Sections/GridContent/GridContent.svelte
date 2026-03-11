<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import TextualItem from '$lib/components/Sections/GridContent/TextualItem.svelte';
	import VisualItem from '$lib/components/Sections/GridContent/VisualItem.svelte';

	interface Props {
		title?: string;
		twoTextualItems?: boolean;
		items?: GridContentItem[];
	}

	let { title, items, twoTextualItems = false }: Props = $props();

	let indexMediaCard = 0;
	let indexTextualCard = 0;
</script>

<section class="grid-content" class:two-textual-items={twoTextualItems}>
	<div class="center">
		{#if title}
			<Title className="hide-mobile">{title}</Title>
		{/if}
		{#if items?.length}
			<div class="grid-content__items">
				{#each items as item}
					{#if item.type === "image" || item.type === "video"}
						<div
							class="grid-content__visual-item"
							class:wide={item.wide}
							style="grid-area: card{++indexMediaCard}"
						>
							<VisualItem {...item} />
						</div>
					{/if}
					{#if item.type === "textual"}
						<div
							class="grid-content__textual-item"
							style="grid-area: textual{++indexTextualCard}"
						>
							<TextualItem
								type={item.type}
								title={item.title}
								name={item.name}
								text={item.text}
							/>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</section>

<style lang="scss">
  .grid-content {
    padding-bottom: 7.5rem;
    padding-top: 13rem;

    @include media(laptop-up) {
      padding-bottom: 2.5rem;
      padding-top: 9.9rem;
    }

    :global(.title) {
      margin-bottom: 3rem;
      margin-left: auto;
      width: fit-content;

      @include media(tablet-up) {
        margin-bottom: 5rem;
      }

      @include media(laptop-up) {
        margin-bottom: 7.1rem;
      }
    }

    &__items {
      display: grid;
      grid-template-columns: minmax(11rem, 15rem) 1fr minmax(11rem, 15rem);
      grid-template-rows: auto 5.5rem auto 4.5rem auto 4rem auto 4.4rem auto 4rem auto 4.4rem auto 5rem;
      grid-template-areas:
        "card1 . card2"
        ". . ."
        "card3 . card4"
        ". . ."
        "textual1 textual1 textual1"
        ". . ."
        "card5 . card6"
        ". . ."
        "textual2 textual2 textual2"
        ". . ."
        "card7 . card8"
        ". . ."
        "textual3 textual3 textual3"
				". . ."
				"card9 . card10";

      @include media(mobile) {
        max-width: 40rem;
      }

      @include media(tablet) {
        max-width: 60rem;
      }

      @include media(laptop-up) {
        grid-template-columns: minmax(11rem, 15rem) 1fr minmax(11rem, 15rem) 1fr minmax(11rem, 15rem) 1fr minmax(11rem, 15rem) 1fr minmax(11rem, 15rem);
        grid-template-rows: auto 7.3rem auto 5.4rem auto;
        grid-template-areas:
        "card1 . card2 . card3 . card4 . card5"
        ". . . . . . . . ."
        "card6 . card7 . card8 . card9 . card10"
        ". . . . . . . . ."
        "textual1 textual1 textual2 textual2 . . textual3 textual3 textual3";
      }
    }

    &__visual-item {
      aspect-ratio: .75;
      display: flex;
      justify-content: center;
      max-height: 15.7rem;
      width: 100%;

      @media (max-width: 401px) {
        width: 13rem;
      }

      :global(.visual-item) {
        max-width: 11.6rem;
      }

      &.wide {
        align-self: center;
        aspect-ratio: 1.33;
        justify-self: center;

        :global(.visual-item) {
          max-width: 15.5rem;
        }
      }
    }

    &__textual-item {
      &[style*="grid-area: textual1"],
      &[style*="grid-area: textual2"],
      &[style*="grid-area: textual3"] {
        @include media(mobile) {
          max-width: 25rem;
        }
      }

      &[style*="grid-area: textual1"],
      &[style*="grid-area: textual2"] {
        @include media(laptop-up) {
          max-width: 27rem;
          padding-right: 2rem;
        }
      }

      &[style*="grid-area: textual3"] {
        :global(.textual-item__text) {
          @include media(tablet-up) {
            column-count: 2;
          }
        }
      }
    }

    &.two-textual-items {
      .grid-content__items {
        grid-template-areas:
        "card1 . card2"
        ". . ."
        "card3 . card4"
        ". . ."
        "textual1 textual1 textual1"
        ". . ."
        "card5 . card6"
        ". . ."
        "textual2 textual2 textual2"
        ". . ."
        "card7 . card8"
        ". . ."
        "card9 . card10";

        @include media(laptop-up) {
          grid-template-areas:
          "card1 . card2 . card3 . card4 . card5"
          ". . . . . . . . ."
          "card6 . card7 . card8 . card9 . card10"
          ". . . . . . . . ."
          "textual1 textual1 textual1 textual1 . textual2 textual2 textual2 textual2";
        }
      }

      .grid-content__textual-item {
        &[style*="grid-area: textual1"],
        &[style*="grid-area: textual2"] {
          @include media(laptop-up) {
            max-width: 64rem;
            padding-right: 0;
          }
        }
      }
    }
  }
</style>