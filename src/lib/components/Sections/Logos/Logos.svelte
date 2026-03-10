<script lang="ts">
	import Image from "$lib/components/Image.svelte";

  interface Props {
		text?: string;
    items?: {
      image?: ImageAttributes;
    }[];
  };
	
	let { text, items }: Props = $props();
</script>

<section class="logos">
  <div class="center">
    <div class="logos__inner">
      {#if text}<div class="logos__text">{text}</div>{/if}
      {#if items?.length}
        <div class="logos__items">
          {#each items as item}           
            <div class="logos__item">         
              <Image data={item.image} />        
            </div>           
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  .logos {

    &__inner {
      padding-top: 3rem;

      @include media(tablet-up) {
        display: flex;
        justify-content: center;
      }
    }

    &__text {
      @include media(mobile) {
        margin-bottom: 2.5rem;
        text-align: center;
      }

      @include media(tablet-up) {
        margin-right: 1.5rem;
        max-width: 14.8rem;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      
      @include media(mobile) {
        justify-content: space-between;
      }

      @include media(tablet-up) {
        column-gap: 3rem;
      }

      @include media(laptop-up) {
        column-gap: 5rem;
      }

      @media (min-width: 1600px) {
         column-gap: 7rem;
      }

      @media (min-width: 1900px) {
         column-gap: 9rem;
      }
    }

    &__item {
      align-items: center;
      display: flex;
      justify-content: center;
      
      @include media(mobile) {
        width: calc(50% - 1rem);
      }
    }
  }
</style>