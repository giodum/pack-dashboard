<script lang="ts">
  interface Props {
    user: {
      name: string;
      role: string;
      photo: string;
    };
  }
  let { user }: Props = $props();
</script>

<div class="flex items-center gap-2">
  <img
    src={user.photo}
    alt={user.name}
    class="h-8 w-8 rounded-full object-cover"
  />
  <div>
    <div class="font-medium">{user.name}</div>
    <div class="text-xs text-gray-500">{user.role}</div>
  </div>
</div>
