<script lang="ts">
	interface Props {
		data?: ImageAttributes | null;
		alt?: string;
		sizes?: string;
		className?: string;
	}

	const { data, alt, sizes, className }: Props = $props();
</script>

{#if data?.src || data?.srcset}
	<img
		src={data.src || ''}
		srcset={data.srcset || ''}
		width={data.width || ''}
		height={data.height || ''}
		sizes={sizes || data.sizes || ''}
		alt={alt || data.alt || ''}
		loading="lazy"
		class={className}
	/>
{/if}
