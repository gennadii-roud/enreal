<script lang="ts">
  import Image from "$lib/components/Image.svelte";

  interface Props {
		items?: {
      image?: ImageAttributes;
      title?: string;
      text?: string;
    }[];
	}

	let { items }: Props = $props();
</script>

<section class="image-content section">
  <div class="center">
    {#if items?.length}
      <div class="image-content__items">
        {#each items as item, i}
          <div class="image-content__item">
            <div class="image-content__item-image">
              {#if item.image}                
                <Image data={item.image} />                            
              {/if}
            </div>
            <div class="image-content__item-content">
              {#if item.title}
                <div class="image-content__item-title">{item.title}<span>{i < 9 ? `0${i + 1}` : i + 1}</span></div>
              {/if}
              {#if item.text}
                <div class="image-content__item-text">{@html item.text}</div>
              {/if}
            </div>         
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  .image-content {

    &__items {
      display: grid;
      gap: 3rem;

      @include media(tablet-up) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media(laptop-up) {
        grid-template-columns: repeat(4, 1fr);
        gap: 6rem;
      }
    }

    &__item {}

    &__item-image {
      align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      height: 15.5rem;
      width: 15.5rem;

      @include media(laptop-up) {
        margin-bottom: 5rem;
      }

      :global(img) {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
      }
    }

    &__item-content {
      font-weight: 600;

      @include media(laptop-up) {
        max-width: 23.4rem;
      }
    }

    &__item-title {
      margin-bottom: 1rem;

      :global(span) {
        font-family: 'Google Sans Flex', sans-serif;
        font-style: italic;
        font-size: 1.4rem;
        font-weight: 400;
        margin-left: 0.4rem;
        position: relative;
        top: -0.4rem;
      }
    }

    &__item-text {
      :global(p) {
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>