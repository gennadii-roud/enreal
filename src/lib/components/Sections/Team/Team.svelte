<script lang="ts">
  import Image from "$lib/components/Image.svelte";
	import Title from "$lib/components/Title.svelte";

  interface Props {
		title?: string;
    items?: {
      image?: ImageAttributes;
      name?: string;
      position?: string;
      text?: string;
    }[];
  };
	
	let { title, items }: Props = $props();
</script>

<section class="team section">
  <div class="center">
    <div class="team__inner">
      {#if title}<Title>{title}</Title>{/if}
      {#if items?.length}
        <div class="team__items">
          {#each items as item}
            <div class="team__item">
              <div class="team__item-image">
                {#if item.image}                
                  <Image data={item.image} />                       
                {/if}
              </div> 
              <div class="team__item-content">
                {#if item.name || item.position} 
                  <div class="team__content-top">
                    {#if item.name}
                      <span class="team__item-name">{item.name}</span>
                    {/if}
                    {#if item.position}
                      <span class="team__item-position">{item.position}</span>
                    {/if}
                  </div>
                {/if}
                {#if item.text}
                  <div class="team__item-text">{item.text}</div>
                {/if}
              </div>           
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  .team {
		&.section {
      @include media(laptop-up) {
        padding-top: 2.5rem;
      }
		}

    &__inner {}

    :global(.title) {
      font-weight: 600;
      margin-bottom: 2.5rem;

      @include media(laptop-up) {
        margin-bottom: 4rem;
      }
    }

    &__items {
      display: grid;
      gap: 3rem;

      @include media(tablet-up) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
    }

    &__item {}

    &__item-image {
      aspect-ratio: 0.83;
      background-color: rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;

      :global(img) {
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    &__item-content {
      @include media(laptop-up) {
        max-width: 75%;
      }

      @include media(desktop-up) {
        max-width: 52%;
      }
    }

    &__content-top {
      margin-bottom: 1rem;
    }

    &__item-name {}

    &__item-position {
      font-weight: 400;
      font-style: italic;
    }

    &__item-text {}
  }
</style>