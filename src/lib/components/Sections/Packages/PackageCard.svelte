<script lang="ts">
	import Button from "$lib/components/Button.svelte";
  import Title from "$lib/components/Title.svelte";
  import checkSvg from "$lib/svg/check.svg?raw"
  import handSvg from '$lib/svg/right-hand.svg?raw';

  import openPopupForm from "$lib/stores/openPopupForm";
  import requestData from "$lib/stores/requestData";

  let { description, isPopular, coverage, includeList, additionalFeatures, note }: PackageCardProps = $props();
  
  let selectedCoverageIndex = $state<number>(0);
  let selectedFeatures = $state<Set<string>>(new Set());

  let basePrice = $derived(
    coverage && coverage[selectedCoverageIndex]?.price
      ? Number(coverage[selectedCoverageIndex].price.replace(/,/g, ""))
      : 0
  );

  let totalPrice = $derived(
    basePrice + 
    (additionalFeatures?.reduce((sum, feature) => 
      selectedFeatures.has(feature.name) ? sum + getFeaturePrice(feature) : sum
    , 0) ?? 0)
  );

  function getFeaturePrice(feature: { name: string; price: number | number[] }): number {
    if (Array.isArray(feature.price)) {
      const priceAtIndex = feature.price[selectedCoverageIndex];
      return typeof priceAtIndex === 'number' ? priceAtIndex : feature.price[0];
    }
    return typeof feature.price === 'number' ? feature.price : 0;
  }

  let selectedIncludeList = $derived(includeList?.[selectedCoverageIndex] ?? []);

  function toggleFeature(feature: { name: string; price: number | number[] }, event: Event) {
    const target = event.target as HTMLInputElement;
    const newSet = new Set(selectedFeatures);

    if (target.checked) {
      newSet.add(feature.name);
    } else {
      newSet.delete(feature.name);
    }

    selectedFeatures = newSet;
  }

  function openRequestForm() {
    openPopupForm.set(true);
    requestData.set({
      description,
      totalPrice,
      coverage: coverage?.[selectedCoverageIndex] || null,
      additionalFeatures: additionalFeatures?.filter(feature => selectedFeatures.has(feature.name)) || []
    });
  }
</script>

<div 
  class="package-card"
  class:popular={isPopular}
> 
  <div class="package-card__top">
    <div class="package-card__top-section">
      {#if description}
        <div class="package-card__description">{description}</div>
      {/if}
      {#if isPopular && note}
        <div class="package-card__note">{note}</div>
      {/if}
    </div>
    <div class="package-card__top-section">
      <Title tag="div">€{totalPrice.toLocaleString('en-US')}</Title>
      {#if isPopular}
        <div class="package-card__icon">{@html handSvg}</div>
      {/if}
    </div>
    
    {#if coverage && coverage.length > 0}
      <div class="package-card__coverage">
        {#each coverage as item, i}
          <div class="package-card__coverage-item">
            <label>
              <input
                type="radio"
                name=""
                value={i}
                bind:group={selectedCoverageIndex}                
                checked={i === 0}
              />
              {item.number}
              <span>h coverage</span> 
            </label>
          </div>
        {/each}
      </div>
    {/if}

    {#if selectedIncludeList.length > 0}
      <ul class="package-card__include-list">
        {#each selectedIncludeList as item}
          <li><i>{@html checkSvg}</i>{item}</li>
        {/each}
      </ul>
    {/if}
  </div>
  <div class="package-card__bottom">
    {#if additionalFeatures && additionalFeatures.length > 0}
      <div class="package-card__feature-items">
        <div class="package-card__feature-title">Possible add ons</div>

        {#each additionalFeatures as feature}
          <div class="package-card__feature-item">
            <label>
              <input
                type="checkbox"
                value={feature.name}
                checked={selectedFeatures.has(feature.name)}
                onchange={(e) => toggleFeature(feature, e)}
              />
              {feature.name}
            </label>
          </div>
        {/each}
      </div>   
    {/if}
    <Button onclick={openRequestForm}>check availability</Button>
  </div>
</div>

<style lang="scss">
  .package-card {
    background-color: var(--white);
    border-radius: 0.5rem;
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1.8rem 1.3rem 2rem;

    @include media(laptop-up) {
      padding: 1.8rem 2.3rem 2rem;
    }

    &__top-section {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.9rem;
    }

    &__note {
      font-style: italic;
      margin-left: 1rem;
    }

    &__icon {
      margin-left: 1rem;
      width: 7.4rem;

      :global(svg) {
        display: block;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

      :global(svg path) {
        fill: currentColor;
      }
    }

    &__description {
      line-height: 1.1;
    }

    :global(.title) {
      font-size: 6.2rem;
      margin-bottom: 1.4rem;
    }

    &__coverage {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    &__coverage-item {

      label {
        align-items: flex-end;
        display: flex;
      }

      input[type="radio"] {
        accent-color: var(--black); 
        height: 1.7rem;
        margin-right: 0.8rem;
        width: 1.7rem;
      }
    }

    &__include-list {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-bottom: 3rem;

      li {

        i {
          display: inline-flex;
          margin-right: 0.8rem;
        }
      }

      :global(svg path) {
        fill: currentColor;
      }
    }

    &__feature-items {
      margin-bottom: 2rem;
    }

    &__feature-title {
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      font-style: italic;
      margin-bottom: 1.4rem;
      padding-bottom: 1rem;
    }

    &__feature-item {
      margin-bottom: 0.8rem;

      &:last-child {
        margin-bottom: 0;
      }

      label {
        align-items: center;
        display: flex;
      }

      input[type="checkbox"] {
        accent-color: var(--black); 
        height: 1.7rem;
        margin-right: 0.8rem;
        width: 1.7rem;
      }
    }

    :global(.button) {
      width: 100%;
    }

    &.popular {
      @include media(desktop-up) {
        height: calc(100% + 7.6rem);
        margin-top: -7.6rem;
      }
    }
  }
</style>