<script lang="ts">
  import Tabs from "$lib/components/shared/Tabs.svelte";
  import Dashboard from "$lib/components/resources/Dashboard.svelte";
  import All from "$lib/components/resources/All.svelte";
  import Videos from "$lib/components/resources/Videos.svelte";
  import Documents from "$lib/components/resources/Documents.svelte";
  import Lessons from "$lib/components/resources/Lessons.svelte";
  import Archive from "$lib/components/resources/Archive.svelte";

  let tabItems = [
    {
      icon: "mdi:bar-chart",
      value: "dashboard",
      component: Dashboard
    },
    { label: "All", value: "all", component: All },
    { label: "Videos", value: "videos", component: Videos },
    { label: "Documents", value: "documents", component: Documents },
    { label: "Lessons", value: "lessons", component: Lessons },
    { label: "Archive", value: "archive", component: Archive, disabled: true }
  ];
</script>

<svelte:head>
  <title>Resources - Pack</title>
</svelte:head>

<Tabs items={tabItems} />
