<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';

	let { type, image, video }: GridContentItem = $props();
</script>

<div class="visual-item">
	{#if type === 'image' && image}
		<Image data={image} className="full-image" />
	{/if}
	{#if type === 'video' && video?.src}
		<Video src={video.src} />
	{/if}
</div>

<style lang="scss">
  .visual-item {
    background-color: var(--placeholder);
    display: flex;
    flex-direction: column;
		// height: 100%;
    overflow: hidden;
		width: 100%;
  }
</style>