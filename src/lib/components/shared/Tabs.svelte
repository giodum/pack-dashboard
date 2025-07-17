<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Snippet } from "svelte";
  import Icon from "@iconify/svelte";
  import TabsActions from "./TabsActions.svelte";

  interface TabItem {
    label?: string;
    value: number | string;
    icon?: string;
    component: Snippet;
    disabled?: boolean;
  }

  interface Props {
    items: TabItem[];
    activeTabValue?: number | string;
    tabClass?: string;
    tabPanelClass?: string;
  }

  let {
    items = [],
    activeTabValue,
    tabClass = "",
    tabPanelClass = ""
  }: Props = $props();

  let currentTab = $state(activeTabValue ?? items[0]?.value ?? 1);

  function handleTabClick(tabValue: number | string, disabled?: boolean) {
    if (!disabled) {
      currentTab = tabValue;
    }
  }
</script>

<div class="flex h-full flex-col">
  <div class="flex items-center justify-between gap-4">
    <ul class="flex flex-grow flex-wrap border-b border-gray-200">
      {#each items as item (item.value)}
        <li class="mr-2 -mb-px last:mr-0">
          <button
            type="button"
            class={`focus-visible:ring-coral-500 mr-4 inline-flex cursor-pointer items-center border-b-2 py-2 text-sm font-medium text-slate-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2
          ${
            item.disabled
              ? "!cursor-auto border-transparent opacity-50"
              : currentTab === item.value
                ? "border-slate-900 bg-white text-slate-900"
                : "border-transparent hover:border-slate-900 hover:text-slate-900"
          }
          ${tabClass}`}
            onclick={() => handleTabClick(item.value, item.disabled)}
            disabled={item.disabled}
            aria-disabled={item.disabled}
          >
            {#if item.icon}
              <span class={item.label ? "mr-2" : ""}>
                <Icon icon={item.icon} width="20" />
              </span>
            {/if}
            {item.label}
          </button>
        </li>
      {/each}
    </ul>
    <div>
      <TabsActions />
    </div>
  </div>

  {#each items as item (item.value)}
    {#if currentTab === item.value}
      <div
        class={`relative w-full flex-grow bg-white py-6 ${tabPanelClass}`}
        in:fade={{ duration: 200 }}
      >
        {@render item.component()}
      </div>
    {/if}
  {/each}
</div>
