<script lang="ts">
    export let name: string = "Felix";
    export let email: string =  "f@gmail.com";
    export let university: string = "GGSIPU";
    export let avatarUrl: string = "https://api.dicebear.com/6.x/adventurer/svg?seed=Felix";
  </script>

  <div class="bg-neutral-200 rounded-lg p-4 w-1/2 items-center shadow-neutral-150 shadow-lg text-center">
    <img class="w-24 h-24 rounded-full mx-auto mb-4" src={avatarUrl} alt="Profile">
    <h2 class="text-xl text-primary-100 font-semibold mx-auto mb-2 bg-neutral-150 w-1/2 rounded-lg py-1">{name}</h2>
    <p class="text-primary-100 mb-2 bg-neutral-150 w-1/2 rounded-lg mx-auto py-1">{email}</p>
    <p class="text-primary-100 bg-neutral-150 w-1/2 rounded-lg mx-auto py-1">{university}</p>
  </div>
  