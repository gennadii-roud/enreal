<script lang="ts">
	import Cta from "$lib/components/Cta.svelte";
	import Title from "$lib/components/Title.svelte";
	import PackageCard from "$lib/components/Sections/Packages/PackageCard.svelte";

  interface Props {
		videoUrl?: string;
    videoPoster?: string;
    title?: string;
    text?: string;
    note?: string;
    titleLeft?: boolean;

    cards?: PackageCardProps[];
    ctaLabel?: string;
    ctaSup?: string;
    ctaText?: string;
    ctaButton?: LinkData;
	}

	let { videoUrl, videoPoster, title, text, note, titleLeft = true, cards, ctaLabel, ctaSup, ctaText, ctaButton }: Props = $props();
</script>

<section 
  class="packages section section--with-bg"
  class:packages--title-right={!titleLeft}
>
  {#if videoUrl}
		<div class="packages__background">
			<video src={videoUrl} poster={videoPoster} autoplay muted playsinline loop></video>
		</div>
	{/if}
  <div class="center">
    <div class="packages__inner">
      <div class="packages__top">
        {#if title && titleLeft || text}
          <div class="packages__top-left">
            {#if title && titleLeft}<Title>{title}</Title>{/if}
            {#if text}
              <div class="packages__text">{text}</div>
            {/if}
          </div>
        {/if}
        {#if title && !titleLeft || note}
          <div class="packages__top-right">
            {#if title && !titleLeft}<Title>{title}</Title>{/if}
            {#if note}
              <div class="packages__text">{note}<span>*</span></div>
            {/if}
          </div>
        {/if}
      </div>
      {#if cards?.length}
        <div class="packages__items">
          {#each cards as card}
            <div class="packages__item">
              <PackageCard 
                description={card.description}            
                isPopular={card.isPopular}
                coverage={card.coverage}
                includeList={card.includeList}
                additionalFeatures={card.additionalFeatures}
                note={card.note}
              />
            </div>
          {/each}
        </div>
      {/if}   
    </div>
  </div>

  <Cta 
    label={ctaLabel}
    sup={ctaSup}
    text={ctaText}
    button={ctaButton}
    nested
  /> 
</section>

<style lang="scss">
  .packages {
    background-color: var(--black);
    color: var(--white);
    overflow: hidden;
    position: relative;

    &__background { 
      inset: 0;
      position: absolute;

      &::before {
        content: '';
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(100px);
        inset: 0;
        position: absolute;
      }

      :global(video) {
        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    &__inner {
      position: relative;
    }

    &__top {
      display: flex;
      margin-bottom: 2rem;

      @include media(mobile) {
        flex-direction: column;
        gap: 1.8rem;  
      }

      @include media(tablet-up) {
        align-items: flex-end;
        justify-content: space-between;
      }

      @include media(laptop-up)  {
        margin-bottom: 3rem;
      }

      :global(.title) {
        margin-bottom: 1rem;
      }
    }

    &__top-left {
      @include media(tablet-up) {
        width: 30%;
      }

      @include media(laptop-up) {
        width: 25%;
      }

      @include media(desktop-up) {
        width: 20.3%;
      }
    }

    &__top-right {
      @include media(tablet-up) {
        text-align: right;
        width: 30%;
      }   

      @include media(laptop-up) {
        width: 22%;
      }

      @include media(desktop-up) {
        width: 14.5%;
      }
    }

    &__text {
      display: flex;

      span {
        display: block;    
        margin-left: 0.6rem;
      }
    }

    &__items {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @include media(tablet-up) {
        grid-template-columns: 1fr 1fr;
      }

      @include media(desktop-up) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    &__item {}

    :global(.cta) {
      margin-top: 4rem;

      @include media(laptop-up) {
        margin-top: 6rem;
      }
    }

    &--title-right {
      .packages__top {
        @include media(mobile) {
          flex-direction: column-reverse;
        }
      }
    }
  }
</style>