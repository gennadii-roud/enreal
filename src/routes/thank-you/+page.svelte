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
      title="Thanks for getting in touch!"
      text="We’ve received your message and will get back to you shortly. In the meantime, feel free to browse our portfolio and get inspired for your event."
      link={{
        url: "/",
        label: "Back To Home Page",
      }}
  />
</PageContent>