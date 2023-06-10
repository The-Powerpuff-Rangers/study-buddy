<script lang="ts">
  export let isFriends:Boolean;
</script>

<div
  class="flex w-3/5 mx-auto justify-between bg-neutral-400 border-2 border-neutral-200 text-white p-3 rounded-2xl"
>
  <div>
    <h1 class="p-3 pb-0">User 1</h1>
    <h3 class="text-neutral-100 text-sm px-3">Joined 3 days ago</h3>
  </div>
  {#if isFriends}
  <button class="bg-primary-200 p-3 px-6 rounded-xl text-white">
    Call
  </button>
  {:else}
  <button class="bg-primary-200 p-3 px-6 rounded-xl text-white">
    Invite
  </button>
  {/if}
</div>

<style>
</style>
