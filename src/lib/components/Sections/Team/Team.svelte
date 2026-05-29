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
    <div>
      {#if title}<Title>{title}</Title>{/if}
      {#if items?.length}
        <div class="team__items">
          {#each items as item}
            <div>
              <div class="team__item-image">
                {#if item.image}                
                  <Image data={item.image} className="full-image"/>
                {/if}
              </div> 
              <div class="team__item-content">
								{#if item.name}
									<h2 class="team__item-title">{item.name}</h2>
								{/if}
                {#if item.text}
                  <div>{item.text}</div>
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

    :global(.title) {
      font-weight: 600;
      margin-bottom: 2.5rem;
      text-transform: uppercase;

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

    &__item-image {
      aspect-ratio: .83;
      background-color: rgba(0, 0, 0, .1);
      margin-bottom: 2rem;
    }

    &__item-content {
      @include media(laptop-up) {
        max-width: 75%;
      }

      @include media(desktop-up) {
        max-width: 52%;
      }
    }

    &__item-title {
      font-size: 2.4rem;
			font-weight: 600;
      margin-bottom: 1.2rem;
		}
  }
</style>