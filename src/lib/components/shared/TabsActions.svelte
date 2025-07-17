<script>
  import Button from "./Button.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="flex items-center gap-2">
  <div class="relative flex items-center">
    <label for="search" class="sr-only">Search field</label>
    <span class="absolute left-3 text-slate-400" aria-hidden="true">
      <Icon icon="mdi:magnify" width="20" />
    </span>
    <input
      id="search"
      type="text"
      name="search"
      placeholder="Field"
      class="focus:border-coral-500 focus:ring-coral-200 w-48 rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-10 text-slate-900 placeholder-slate-400 transition focus:ring-2 focus:outline-none"
      role="searchbox"
      aria-label="Search field"
      autocomplete="off"
    />
  </div>
  <Button label="Upload" onClick={() => {}} />
</div>
