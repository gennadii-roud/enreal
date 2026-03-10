<script lang="ts">
	import Title from "$lib/components/Title.svelte";

  interface Props {
		title?: string;
    items?: {
      question?: string;
      answer?: string;
    }[];
	}

	let { title, items }: Props = $props();

  let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section class="faq section">
  <div class="center">
    <div class="faq__inner">
      {#if title}
        <Title tag="h2">{title}</Title>
      {/if}
      {#if items?.length}
        <div class="faq__items">
          {#each items as item, i}
            <div class="faq__item">
              {#if item.question}
                <button 
                  class="faq__question"
                  onclick={() => toggle(i)}
                >
                  {item.question}
                  <div class="faq__sign" class:rotated={openIndex === i}></div>
                </button>
              {/if}
              {#if item.answer}
                <div class="faq__answer {openIndex === i ? 'opened' : ''}">
                  <div class="faq__answer-inner">{item.answer}</div>
                </div>
              {/if}            
            </div>
          {/each}
        </div>
      {/if}   
    </div>
  </div>
</section>

<style lang="scss">
  .faq {

    &__inner {
      display: grid;

      @include media(mobile) {
        gap: 1.8rem;
      }

      @include media(tablet-up) {
        grid-template-columns: 43% 52.8%;
        justify-content: space-between;
      }
    }

    :global(.title) {
      line-height: 0.9;
    }

    &__item {
      border-bottom: .1rem solid rgba(0, 0, 0, .2);
      font-size: 1.6rem;
    }

    &__question {
      appearance: none;
      align-items: center;
      background-color: transparent;
      border: none;  
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      line-height: 1;
      outline: none;
      padding: 2rem 0;
      text-align: left;
      transition: opacity .2s;
      width: 100%;

      &:hover {
        opacity: 0.7;
      }
    }

    &__sign {
      flex-shrink: 0;
      height: 2rem;
      margin-left: 2rem;
      position: relative;
      transition: transform .2s;
      width: 2rem;

      &.rotated {
        transform: rotateX(180deg) translateY(-.1rem);
      }

      &::before,
      &::after {
        content: '';
        background-color: currentColor;
        height: 1rem;
        position: absolute;
        top: .6rem;
        width: .2rem;
      }

      &::before {
        left: .8rem;
        transform: rotate(-45deg);
      }

      &::after {
        left: 1.4rem;
        transform: rotate(45deg);
      }
    }

    &__answer {
      display: grid;
      font-size: 1.4rem;
      grid-template-rows: 0fr;
      transition: grid-template-rows .3s, padding .3s;

      &.opened {
        grid-template-rows: 1fr;
        padding: 2rem 0;
      }
    }

    &__answer-inner {
      max-width: 85%;
      overflow: hidden;
    }
  }
</style>