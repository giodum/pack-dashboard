<script lang="ts">
  import type { UsageData } from "$src/lib/types/usage";
  import UsageContentAccessTable from "./UsageContentAccessTable.svelte";
  import Button from "$lib/components/shared/Button.svelte";
  import Icon from "@iconify/svelte";

  interface Props {
    usageData: UsageData;
  }
  let { usageData }: Props = $props();

  let provider = $state("");
  let dateFrom = $state("");
  let dateTo = $state("");

  let providers = $derived([
    ...new Set(usageData.map((item) => item.provider))
  ]);
</script>

<div class="w-full py-8">
  <h1 class="mb-3 text-base font-semibold text-gray-900">
    User Content Access
  </h1>

  <div class="mb-4 flex flex-col flex-wrap gap-4 md:flex-row">
    <div class="flex flex-grow flex-col flex-wrap gap-4 md:flex-row">
      <div class="flex-1">
        <label for="provider-select" class="sr-only">Provider</label>
        <div class="relative w-full">
          <select
            id="provider-select"
            class="focus:border-coral-500 focus:ring-coral-200 w-full appearance-none rounded-lg border border-slate-300 bg-white py-2 pr-8 pl-3 text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:outline-none"
            bind:value={provider}
          >
            <option value="">All</option>
            {#each providers as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
          <span
            class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400"
          >
            <Icon icon="mdi:chevron-down" width="14" />
          </span>
        </div>
      </div>
      <div class="flex-1">
        <label for="date-from" class="sr-only">From</label>
        <input
          id="date-from"
          type="date"
          class="focus:border-coral-500 focus:ring-coral-200 w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-3 text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:outline-none"
          bind:value={dateFrom}
        />
      </div>
      <div class="flex-1">
        <label for="date-to" class="sr-only">To</label>
        <input
          id="date-to"
          type="date"
          class="focus:border-coral-500 focus:ring-coral-200 w-48 w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-3 text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:outline-none"
          bind:value={dateTo}
        />
      </div>
    </div>
    <div>
      <Button label="Download" onClick={() => {}} />
    </div>
  </div>

  <UsageContentAccessTable {usageData} />
</div>
