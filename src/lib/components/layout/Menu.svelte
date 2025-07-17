<script lang="ts">
  import { page } from "$app/state";

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
</script>

<nav aria-label="Main menu">
  <ul role="menubar" class="flex gap-2 md:gap-4">
    {#each menu as item (item.href)}
      <li role="none">
        <a
          role="menuitem"
          href={item.href}
          class="focus-visible:ring-coral-500 font-primary hover:text-coral-500 focus:text-coral-500 data-[active=true]:text-coral-500 data-[active=true]:border-coral-500 inline-block border-b-2 border-transparent px-3 py-4 text-lg font-semibold text-slate-500 opacity-100 transition-all focus:outline-none focus-visible:ring-2"
          aria-current={page.url.pathname === item.href ? "page" : undefined}
          data-active={page.url.pathname === item.href}
          >{item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
