<script lang="ts">
  import {
    Datatable,
    Pagination,
    RowCount,
    RowsPerPage,
    Search,
    TableHandler,
    Th,
    ThSort,
    type Field
  } from "@vincjo/datatables";
  import UserCell from "./UserCell.svelte";
  import Icon from "@iconify/svelte";
  import type { UsageEntry } from "$src/lib/types/usage";

  interface Props {
    usageData: UsageEntry[];
  }
  let { usageData }: Props = $props();

  // Map usageData to table rows
  function convertToTableRows(data: UsageEntry[]) {
    return data.map((item) => ({
      user: item.user, // pass user object
      accessed_content: item.accessedContent,
      opened_on: item.openedOn,
      closed_on: item.closedOn,
      provider: item.provider,
      actions: "" // placeholder
    }));
  }

  const tableFields: {
    field: string;
    label: string;
    sortable?: boolean;
  }[] = [
    {
      field: "user",
      label: "User",
      sortable: false
    },
    {
      field: "accessed_content",
      label: "Accessed Content",
      sortable: true
    },
    {
      field: "opened_on",
      label: "Opened On",
      sortable: true
    },
    {
      field: "closed_on",
      label: "Closed On",
      sortable: true
    },
    {
      field: "provider",
      label: "Provider",
      sortable: true
    },
    {
      field: "actions",
      label: "Actions"
    }
  ];

  const table = new TableHandler<{
    user: UsageEntry["user"];
    accessed_content: string;
    opened_on: string;
    closed_on: string;
    provider: string;
    actions: string;
  }>([], {
    highlight: true,
    rowsPerPage: 10
  });

  $effect(() => {
    if (usageData) {
      table.setRows(convertToTableRows(usageData));
    }
  });
</script>

<Datatable {table}>
  <div class="table-custom-header">
    <Search {table} />
    <RowsPerPage {table} />
  </div>
  <table class="table w-full">
    <thead>
      <tr>
        {#each tableFields as field (field.field)}
          {#if field.sortable}
            <ThSort {table} field={field.field as Field<string>}
              >{field.label}</ThSort
            >
          {:else}
            <Th>{field.label}</Th>
          {/if}
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each table.rows as row (row.user.id)}
        <tr>
          <td><UserCell user={row.user} /></td>
          <td>{row.accessed_content}</td>
          <td>{row.opened_on}</td>
          <td>{row.closed_on}</td>
          <td>
            <span
              class="rounded-full border px-2 py-0.5 text-xs font-semibold"
              style="
                background-color: transparent;
                color: {row.provider === 'pack'
                ? '#ff7f50'
                : row.provider === 'mentor'
                  ? '#22c55e'
                  : '#374151'};
                border-color: {row.provider === 'pack'
                ? '#ff7f50'
                : row.provider === 'mentor'
                  ? '#22c55e'
                  : '#e5e7eb'};
              "
            >
              {row.provider}
            </span>
          </td>
          <td>
            <button aria-label="Action" class="rounded p-1 hover:bg-gray-100">
              <Icon icon="mdi:dots-horizontal" width="20" />
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="mt-4 flex items-center justify-between">
    <div>
      <RowCount {table} />
    </div>
    <div>
      <Pagination {table} />
    </div>
  </div>
</Datatable>
