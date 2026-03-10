<script lang="ts">
  import PageConfig from '$lib/components/PageConfig.svelte';
  import PageContent from '$lib/components/PageContent.svelte';
  import ThankYou from '$lib/components/ThankYou.svelte';

  let canonical: string = '';
  let title: string = '';
  let description: string = '';
  let robots: string[] = [];
  let imageUrl: string = '';
</script>

<PageConfig {canonical} {title} {description} {robots} {imageUrl} />

<PageContent>
  <ThankYou
      title="Thank you"
      link={{
        url: "/",
        label: "Back To Home Page",
      }}
  />
</PageContent>