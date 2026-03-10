<script lang="ts">
	let { title, name, text }: GridContentItem = $props();
</script>

<!--{#if type === "textual"}-->
	<div class="textual-item">
		{#if title}
			<h3 class="textual-item__title">{@html title}</h3>
		{/if}
		{#if name}
			<div class="textual-item__name">{@html name}</div>
		{/if}
		{#if text}
			<div class="textual-item__text">{@html text}</div>
		{/if}
	</div>
<!--{/if}-->

<style lang="scss">
  .textual-item {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;

    &__title {
      align-items: flex-start;
      display: inline-flex;
      font-weight: 600;
      line-height: 1.2;

      :global(i) {
        font-family: 'Libertinus Serif', serif;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1;
        margin-left: .6rem;
      }
    }

    &__name {
      :global(i) {
        font-family: 'Libertinus Serif', serif;
        font-weight: 400;
        line-height: 1;
      }
    }

    &__text {
      font-weight: 600;

      :global {
        p {
          @include media(mobile) {
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
          @include media(tablet-up) {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>

