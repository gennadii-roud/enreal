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
        {#each items as item}
          <div class="image-content__item">
            <div class="image-content__item-image">
              {#if item.image}                
                <Image data={item.image} />                            
              {/if}
            </div>
            <div class="image-content__item-content">
							{#if item.title}
                <h2 class="image-content__item-title">{item.title}</h2>
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
      @include media(laptop-up) {
        max-width: 23.4rem;
      }
    }

    &__item-title {
      margin-bottom: 1rem;
      font-size: 2.4rem;
			font-weight: 600;
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