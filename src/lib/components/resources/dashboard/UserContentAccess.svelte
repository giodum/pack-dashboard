<script lang="ts">
  import type { UsageData } from "$src/lib/types/usage";
  import UsageContentAccessTable from "./UsageContentAccessTable.svelte";
  import Button from "$lib/components/shared/Button.svelte";

  interface Props {
    usageData: UsageData;
  }
  let { usageData }: Props = $props();

  let provider = $state("");
  let dateFrom = $state("");
  let dateTo = $state("");

  let providerOptions = $derived(() =>
    Array.from(new Set(usageData.map((u) => u.provider)))
  );
</script>

<div class="w-full py-8">
  <h1 class="mb-3 text-base font-semibold text-gray-900">
    User Content Access
  </h1>

  {providerOptions}
  <div class="mb-4 flex flex-wrap items-end gap-4">
    <div>
      <label
        for="provider-select"
        class="mb-1 block text-xs font-medium text-gray-700">Provider</label
      >
      <select
        id="provider-select"
        class="rounded border px-2 py-1"
        bind:value={provider}
      >
        <option value="">All</option>
        {#each providerOptions as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
    <div>
      <label
        for="date-from"
        class="mb-1 block text-xs font-medium text-gray-700">From</label
      >
      <input
        id="date-from"
        type="date"
        class="rounded border px-2 py-1"
        bind:value={dateFrom}
      />
    </div>
    <div>
      <label for="date-to" class="mb-1 block text-xs font-medium text-gray-700"
        >To</label
      >
      <input
        id="date-to"
        type="date"
        class="rounded border px-2 py-1"
        bind:value={dateTo}
      />
    </div>
    <div class="ml-auto">
      <Button label="Download" onClick={() => {}} />
    </div>
  </div>

  <UsageContentAccessTable {usageData} />
</div>
