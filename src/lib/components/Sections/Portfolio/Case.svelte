<script lang="ts">
	import MediaCard from '$lib/components/MediaCard.svelte';
	import PopupVideo from '$lib/components/PopupVideo.svelte';
	import VideoDetails from '$lib/components/VideoDetails.svelte';

	import ImageDetails from '$lib/components/ImageDetails.svelte';
	import PopupImage from '$lib/components/PopupImage.svelte';

	let { type, video, image, date, category, title, place, location, videoUrl, price, coverage, hoveredImages, popupImages }: MediaCardProps = $props();

	let isHovered = $state(false);
	let openPopupVideo = $state(false);
	let openPopupImage = $state(false);

	const handleCardClick = (type: "image" | "video") => {
		if (type === "video") {
			openPopupVideo = true;
		}

		if (type === "image") {
			openPopupImage = true;
		}
	};
</script>

{#if type === "video" && openPopupVideo}
	<PopupVideo
		onclose={() => openPopupVideo = false}
	>
		<VideoDetails
			{title}
			{videoUrl}
			{place}
			{location}
			{date}
			{category}
			{price}
			{coverage}
			onclose={() => openPopupVideo = false}
		/>
	</PopupVideo>
{/if}

{#if type === "image" && openPopupImage}
	<PopupImage
		onclose={() => openPopupImage = false}
	>
		<ImageDetails
			{title}
			{place}
			{location}
			{date}
			{category}
			{price}
			{coverage}
			{popupImages}
			onclose={() => openPopupImage = false}
		/>
	</PopupImage>
{/if}

<div
	class="case"
	onmouseenter={() => isHovered = true}
	onmouseleave={() => isHovered = false}
	onclick={() => handleCardClick(type)}
>
	<MediaCard
		{type}
		{video}
		{image}
		{date}
		{category}
		{title}
		{place}
		{location}
		{hoveredImages}
		play={isHovered}
	/>
</div>

<style lang="scss">
  .case {
    cursor: pointer;
  }
</style>