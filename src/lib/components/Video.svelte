<script lang="ts">
	let { src, play = $bindable(true) }: VideoAttributes = $props();

	let video: HTMLVideoElement;

	$effect(() => {
		if (play) {
			video.play();
		} else {
			video.pause();
			video.currentTime = 0;
		}
	});
</script>

<video
	class="video"
	{src}
	autoplay
	muted
	loop
	playsinline
	bind:this={video}
>
</video>

<style lang="scss">
  .video {
		display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
</style>