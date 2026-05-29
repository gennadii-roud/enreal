<script lang="ts">
	interface Props {
		opened?: boolean;
		contactData?: ContactDataProps[];
	}

	let { opened = $bindable(false), contactData }: Props = $props();
</script>

<div class="contact">
	{#if contactData?.length}
		{#each contactData as item}
			<div class="contact__item">
				<p class="contact__label">{item.label}</p>
				<div class="contact__links">
					{#each item.links as link}
						<a href={link.url} onclick={() => opened = false} aria-label="Go to social media" target="_blank" rel="nofollow noopener">
							{link.linkLabel}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
  .contact {
    display: grid;
    gap: 2.2rem;

    &__item {
      font-weight: 500;
      line-height: 1.1;
    }

    &__label {
      color: var(--grey);
      margin-bottom: .7rem;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>

