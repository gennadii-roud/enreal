<script>
</script>

<div class="loader"></div>

<style lang="scss">
  .loader {
    animation: rotate 1s linear infinite;
    border: .3rem solid transparent;
    border-radius: 50%;
    border-top: .3rem solid currentColor;
    height: 2rem;
    width: 2rem;

		@include media(laptop-up) {
      height: 4rem;
      width: 4rem;
		}
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>