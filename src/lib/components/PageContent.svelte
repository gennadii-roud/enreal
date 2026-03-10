<script lang="ts">
  import { onMount } from 'svelte';
  let { children } = $props();

  onMount(() => {
    // TODO fix temporary solution
    // Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
    if (typeof window !== 'undefined' && window.location.hash) {
      const deepLinkedElement = document.getElementById(window.location.hash.substring(1))
      if (deepLinkedElement) {
        window.setTimeout(() => deepLinkedElement.scrollIntoView(), 400);
      }
    }
  })
</script>

<div class="page-content">
  {@render children?.()}
</div>