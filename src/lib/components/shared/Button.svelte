<script lang="ts">
  interface Props {
    label: string;
    disabled?: boolean;
    href?: string;
    target?: string;
    onClick?: (event: MouseEvent) => void;
  }

  let { label, disabled = false, href, target, onClick }: Props = $props();

  let classes = $derived(
    `cursor-pointer bg-coral-500 hover:bg-coral-600 hover:opacity-100 inline-block rounded-lg px-3 py-2 font-semibold text-white shadow transition-colors${
      disabled ? " opacity-50 pointer-events-none" : ""
    }`
  );
</script>

{#if href}
  <a
    class={classes}
    href={disabled ? undefined : href}
    {target}
    aria-disabled={disabled}
    tabindex={disabled ? -1 : 0}
    aria-label={label}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}>{label}</a
  >
{:else if onClick}
  <button
    class={classes}
    type="button"
    {disabled}
    aria-disabled={disabled}
    aria-label={label}
    onclick={onClick}>{label}</button
  >
{/if}
