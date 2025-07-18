<script lang="ts">
  import type { UsageData } from "$src/lib/types/usage";
  import UsageContentAccessTable from "./UsageContentAccessTable.svelte";

  interface Props {
    usageData: UsageData;
  }
  let { usageData }: Props = $props();
</script>

<div class="w-full">
  <h1 class="mb-3 text-base font-semibold text-gray-900">
    User Content Access
  </h1>

  <UsageContentAccessTable {usageData} />
</div>
