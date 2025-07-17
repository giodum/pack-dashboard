<script lang="ts">
  import { page } from "$app/state";
  import Icon from "@iconify/svelte";
  let isOpen = false;

  // Menu items
  const menu = [
    { label: "Dashboard", href: "/" },
    { label: "Users", href: "/users" },
    { label: "Feedbacks", href: "/feedbacks" },
    { label: "Programs", href: "/programs" },
    { label: "Resources", href: "/resources" },
    { label: "Counterparties", href: "/counterparties" },
    { label: "Events", href: "/events" }
  ];

  function openMenu() {
    isOpen = true;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<div>
  <!-- Burger button (only visible on mobile) -->
  <button
    class="focus-visible:ring-coral-500 p-3 focus:outline-none focus-visible:ring-2 lg:hidden"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-controls="main-menu"
    aria-expanded={isOpen}
    onclick={openMenu}
    type="button"
  >
    <Icon icon="mdi:menu" width="28" />
  </button>

  <!-- Main menu for desktop and mobile -->
  <nav id="main-menu" aria-label="Main menu" class="">
    <ul
      role="menubar"
      class="
        fixed inset-0 z-50
        m-0 flex w-full
        flex-col items-center justify-center gap-2 bg-white p-0 transition-all
        lg:relative
        lg:w-auto lg:flex-row
        lg:items-stretch
        lg:justify-start
        lg:gap-4
        lg:bg-transparent
        {isOpen ? 'flex' : 'hidden'}
        lg:flex
      "
    >
      <!-- Close menu button (only visible on mobile when menu is open) -->
      {#if isOpen}
        <li class="flex w-full justify-end lg:hidden">
          <button
            class="focus-visible:ring-coral-500 absolute top-4 right-4 p-2 focus:outline-none focus-visible:ring-2"
            aria-label="Close menu"
            onclick={closeMenu}
            type="button"
          >
            <Icon icon="mdi:close" width="28" />
          </button>
        </li>
      {/if}
      {#each menu as item (item.href)}
        <li role="none" class="w-auto text-center lg:text-left">
          <a
            role="menuitem"
            href={item.href}
            class="focus-visible:ring-coral-500 font-primary hover:text-coral-500 focus:text-coral-500 data-[active=true]:text-coral-500 data-[active=true]:border-coral-500 my-2 inline-block w-full border-b-2 border-transparent px-3 py-1 text-lg font-semibold text-slate-500 opacity-100 transition-all focus:outline-none focus-visible:ring-2 lg:my-0 lg:w-auto lg:py-4 lg:text-lg xl:text-xl"
            aria-current={page.url.pathname === item.href ? "page" : undefined}
            data-active={page.url.pathname === item.href}
            tabindex="0"
            onclick={isOpen ? closeMenu : undefined}>{item.label}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</div>
